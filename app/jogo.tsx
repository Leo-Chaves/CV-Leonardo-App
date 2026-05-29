import { useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { AppButton } from '../components/AppButton';
import { AppCard } from '../components/AppCard';
import { Screen } from '../components/Screen';
import { SectionTitle } from '../components/SectionTitle';
import { colors } from '../constants/colors';
import { alphabet, movies } from '../constants/data';

const MAX_ERRORS = 6;

function normalizeText(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toUpperCase();
}

function getRandomMovie(previousMovie?: string) {
  if (movies.length === 1) {
    return movies[0];
  }

  let nextMovie = movies[Math.floor(Math.random() * movies.length)];

  while (nextMovie === previousMovie) {
    nextMovie = movies[Math.floor(Math.random() * movies.length)];
  }

  return nextMovie;
}

function buildHiddenMovie(movie: string, usedLetters: string[]) {
  return normalizeText(movie)
    .split('')
    .map((char) => {
      if (char === ' ') {
        return '   ';
      }

      return usedLetters.includes(char) ? char : '_';
    })
    .join(' ');
}

function getWrongLetters(movie: string, usedLetters: string[]) {
  const normalizedMovie = normalizeText(movie);
  return usedLetters.filter((letter) => !normalizedMovie.includes(letter));
}

function getCorrectLetters(movie: string, usedLetters: string[]) {
  const normalizedMovie = normalizeText(movie);
  return usedLetters.filter((letter) => normalizedMovie.includes(letter));
}

export default function JogoScreen() {
  const [currentMovie, setCurrentMovie] = useState(() => getRandomMovie());
  const [usedLetters, setUsedLetters] = useState<string[]>([]);

  const normalizedMovie = normalizeText(currentMovie);
  const correctLetters = useMemo(
    () => getCorrectLetters(currentMovie, usedLetters),
    [currentMovie, usedLetters],
  );
  const wrongLetters = useMemo(
    () => getWrongLetters(currentMovie, usedLetters),
    [currentMovie, usedLetters],
  );
  const errors = wrongLetters.length;
  const remainingAttempts = Math.max(MAX_ERRORS - errors, 0);
  const hiddenMovie = buildHiddenMovie(currentMovie, usedLetters);
  const hasWon = normalizedMovie
    .split('')
    .filter((char) => char !== ' ')
    .every((char) => usedLetters.includes(char));
  const hasLost = errors >= MAX_ERRORS;
  const isGameOver = hasWon || hasLost;

  function chooseLetter(letter: string) {
    if (usedLetters.includes(letter) || isGameOver) {
      return;
    }

    setUsedLetters((letters) => [...letters, letter]);
  }

  function resetGame() {
    setCurrentMovie((movie) => getRandomMovie(movie));
    setUsedLetters([]);
  }

  return (
    <Screen>
      <SectionTitle
        eyebrow="Filmes"
        title="Jogo da Forca: Filmes"
        subtitle="Escolha letras no teclado virtual e tente descobrir o filme sorteado."
      />

      <AppCard style={styles.wordCard}>
        <Text style={styles.smallLabel}>Palavra oculta</Text>
        <Text style={styles.hiddenWord}>{hiddenMovie}</Text>
      </AppCard>

      <AppCard style={styles.statusCard}>
        <View style={styles.statusRow}>
          <View style={styles.statusBox}>
            <Text style={styles.statusNumber}>{errors}</Text>
            <Text style={styles.statusLabel}>Erros</Text>
          </View>
          <View style={styles.statusBox}>
            <Text style={styles.statusNumber}>{remainingAttempts}</Text>
            <Text style={styles.statusLabel}>Tentativas</Text>
          </View>
        </View>
        <Text style={styles.errorText}>Erro {errors} de 6</Text>
        <Hangman errors={errors} />
        <AttemptList correctLetters={correctLetters} wrongLetters={wrongLetters} />
      </AppCard>

      {isGameOver ? (
        <AppCard
          style={[
            styles.resultCard,
            hasWon ? styles.winCard : styles.lossCard,
          ]}
        >
            <Text style={styles.resultTitle}>{hasWon ? 'Vitória!' : 'Derrota!'}</Text>
          <Text style={styles.resultText}>
            {hasWon
              ? `Parabéns! Você acertou: ${currentMovie}.`
              : `O filme era ${currentMovie}. Tente novamente.`}
          </Text>
        </AppCard>
      ) : null}

      <View style={styles.keyboard}>
        {alphabet.map((letter) => {
          const disabled = usedLetters.includes(letter) || isGameOver;
          const isCorrect = correctLetters.includes(letter);
          const isWrong = wrongLetters.includes(letter);

          return (
            <Pressable
              key={letter}
              disabled={disabled}
              onPress={() => chooseLetter(letter)}
              style={({ pressed }) => [
                styles.key,
                pressed && styles.keyPressed,
                isCorrect && styles.keyCorrect,
                isWrong && styles.keyWrong,
                disabled && !isCorrect && !isWrong && styles.keyDisabled,
              ]}
            >
              <Text
                style={[
                  styles.keyText,
                  disabled && !isCorrect && !isWrong && styles.keyDisabledText,
                ]}
              >
                {letter}
              </Text>
            </Pressable>
          );
        })}
      </View>

      <View style={styles.actions}>
        <AppButton title="Reiniciar jogo" onPress={resetGame} style={styles.action} />
      </View>
    </Screen>
  );
}

function AttemptList({
  correctLetters,
  wrongLetters,
}: {
  correctLetters: string[];
  wrongLetters: string[];
}) {
  return (
    <View style={styles.attempts}>
      <View style={styles.attemptGroup}>
        <Text style={styles.attemptLabel}>Corretas</Text>
        <View style={styles.attemptChips}>
          {correctLetters.length > 0 ? (
            correctLetters.map((letter) => (
              <Text key={letter} style={[styles.attemptChip, styles.correctChip]}>
                {letter}
              </Text>
            ))
          ) : (
            <Text style={styles.emptyAttempts}>nenhuma</Text>
          )}
        </View>
      </View>

      <View style={styles.attemptGroup}>
        <Text style={styles.attemptLabel}>Incorretas</Text>
        <View style={styles.attemptChips}>
          {wrongLetters.length > 0 ? (
            wrongLetters.map((letter) => (
              <Text key={letter} style={[styles.attemptChip, styles.wrongChip]}>
                {letter}
              </Text>
            ))
          ) : (
            <Text style={styles.emptyAttempts}>nenhuma</Text>
          )}
        </View>
      </View>
    </View>
  );
}

function Hangman({ errors }: { errors: number }) {
  return (
    <View style={styles.hangman}>
      <View style={styles.gallows}>
        <View style={styles.gallowsTop} />
        <View style={styles.gallowsRope} />
        <View style={styles.gallowsPost} />
        <View style={styles.gallowsBase} />
      </View>
      <View style={styles.person}>
        <Text style={styles.personLine}>{errors >= 1 ? 'O' : ' '}</Text>
        <Text style={styles.personLine}>
          {errors >= 3 ? '/' : ' '}
          {errors >= 2 ? '|' : ' '}
          {errors >= 4 ? '\\' : ' '}
        </Text>
        <Text style={styles.personLine}>
          {errors >= 5 ? '/' : ' '}
          {errors >= 6 ? '\\' : ' '}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wordCard: {
    gap: 12,
    alignItems: 'center',
  },
  smallLabel: {
    color: colors.secondary,
    fontSize: 12,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  hiddenWord: {
    color: colors.text,
    fontSize: 25,
    lineHeight: 38,
    fontWeight: '900',
    textAlign: 'center',
  },
  statusCard: {
    gap: 14,
  },
  statusRow: {
    flexDirection: 'row',
    gap: 12,
  },
  statusBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 76,
    borderRadius: 14,
    backgroundColor: colors.cardAlt,
  },
  statusNumber: {
    color: colors.text,
    fontSize: 28,
    fontWeight: '900',
  },
  statusLabel: {
    color: colors.subtleText,
    fontSize: 13,
    fontWeight: '700',
  },
  errorText: {
    color: colors.warning,
    fontSize: 15,
    fontWeight: '800',
    textAlign: 'center',
  },
  attempts: {
    gap: 12,
  },
  attemptGroup: {
    gap: 7,
  },
  attemptLabel: {
    color: colors.primaryLight,
    fontSize: 12,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  attemptChips: {
    minHeight: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 7,
  },
  attemptChip: {
    overflow: 'hidden',
    minWidth: 30,
    borderRadius: 999,
    paddingHorizontal: 9,
    paddingVertical: 6,
    color: colors.text,
    fontSize: 13,
    fontWeight: '900',
    textAlign: 'center',
  },
  correctChip: {
    backgroundColor: colors.success,
  },
  wrongChip: {
    backgroundColor: colors.danger,
  },
  emptyAttempts: {
    color: colors.subtleText,
    fontSize: 14,
    lineHeight: 24,
    fontWeight: '700',
  },
  hangman: {
    minHeight: 140,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gallows: {
    position: 'absolute',
    width: 128,
    height: 128,
  },
  gallowsTop: {
    position: 'absolute',
    top: 4,
    left: 22,
    width: 74,
    height: 4,
    borderRadius: 4,
    backgroundColor: colors.secondary,
  },
  gallowsRope: {
    position: 'absolute',
    top: 6,
    left: 92,
    width: 4,
    height: 24,
    borderRadius: 4,
    backgroundColor: colors.secondary,
  },
  gallowsPost: {
    position: 'absolute',
    top: 4,
    left: 22,
    width: 4,
    height: 112,
    borderRadius: 4,
    backgroundColor: colors.secondary,
  },
  gallowsBase: {
    position: 'absolute',
    left: 4,
    bottom: 10,
    width: 80,
    height: 4,
    borderRadius: 4,
    backgroundColor: colors.secondary,
  },
  person: {
    marginLeft: 76,
    minWidth: 46,
    alignItems: 'center',
  },
  personLine: {
    minHeight: 27,
    color: colors.text,
    fontSize: 24,
    lineHeight: 28,
    fontWeight: '900',
    fontFamily: 'monospace',
  },
  resultCard: {
    gap: 8,
  },
  winCard: {
    borderColor: colors.success,
  },
  lossCard: {
    borderColor: colors.danger,
  },
  resultTitle: {
    color: colors.text,
    fontSize: 20,
    fontWeight: '900',
  },
  resultText: {
    color: colors.mutedText,
    fontSize: 15,
    lineHeight: 22,
  },
  keyboard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
  },
  key: {
    width: 42,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.surfaceElevated,
  },
  keyPressed: {
    backgroundColor: colors.primaryPressed,
  },
  keyDisabled: {
    borderColor: colors.border,
    backgroundColor: colors.cardAlt,
    opacity: 0.55,
  },
  keyCorrect: {
    borderColor: colors.success,
    backgroundColor: colors.success,
  },
  keyWrong: {
    borderColor: colors.danger,
    backgroundColor: colors.danger,
  },
  keyText: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '900',
  },
  keyDisabledText: {
    color: colors.subtleText,
  },
  actions: {
    flexDirection: 'row',
    gap: 10,
  },
  action: {
    flex: 1,
  },
});
