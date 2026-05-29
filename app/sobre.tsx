import { StyleSheet, Text, View } from 'react-native';

import { AppCard } from '../components/AppCard';
import { Screen } from '../components/Screen';
import { SectionTitle } from '../components/SectionTitle';
import { TechBadge } from '../components/TechBadge';
import { colors } from '../constants/colors';
import { appTechnologies, generalSkills } from '../constants/data';

export default function SobreScreen() {
  return (
    <Screen>
      <AppCard style={styles.introCard}>
        <Text style={styles.introText}>
          Criei este portfólio digital para mostrar um pouco do meu trabalho, minha evolução como
          desenvolvedor e os projetos que venho construindo com foco em tecnologia, criatividade e
          solução de problemas.
        </Text>
      </AppCard>

      <AppCard style={styles.card}>
        <SectionTitle title="Tecnologias do app" subtitle="Módulos usados na construção." />
        <View style={styles.badges}>
          {appTechnologies.map((technology) => (
            <TechBadge key={technology} label={technology} />
          ))}
        </View>
      </AppCard>

      <AppCard style={styles.card}>
        <SectionTitle title="Habilidades gerais" subtitle="Stack e ferramentas de trabalho." />
        <View style={styles.badges}>
          {generalSkills.map((skill) => (
            <TechBadge key={skill} label={skill} />
          ))}
        </View>
      </AppCard>
    </Screen>
  );
}

const styles = StyleSheet.create({
  introCard: {
    backgroundColor: colors.surfaceLight,
    borderColor: colors.primary,
  },
  introText: {
    color: colors.muted,
    fontSize: 16,
    lineHeight: 25,
    fontWeight: '600',
  },
  card: {
    gap: 2,
  },
  badges: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
});
