import { StyleSheet, Text, View } from 'react-native';

import { AppCard } from '../components/AppCard';
import { Screen } from '../components/Screen';
import { SectionTitle } from '../components/SectionTitle';
import { colors } from '../constants/colors';
import { developmentInternshipActivities, professionalActivities } from '../constants/data';

export default function ExperienciaProfissionalScreen() {
  return (
    <Screen>
      <SectionTitle
        eyebrow="Carreira"
        title="Experiência Profissional"
        subtitle="Atuação atual em desenvolvimento na DISSEN da UNICAP, com experiência complementar em suporte de TI."
      />

      <AppCard style={[styles.card, styles.currentCard]}>
        <View style={styles.roleHeader}>
          <Text style={styles.role}>Estagiário em Desenvolvimento</Text>
          <Text style={styles.currentBadge}>Atual</Text>
        </View>
        <Text style={styles.company}>DISSEN - UNICAP</Text>
        <View style={styles.list}>
          {developmentInternshipActivities.map((activity) => (
            <View key={activity} style={styles.listItem}>
              <View style={styles.dot} />
              <Text style={styles.itemText}>{activity}</Text>
            </View>
          ))}
        </View>
      </AppCard>

      <AppCard style={styles.card}>
        <Text style={styles.role}>Estagiário de Suporte de TI</Text>
        <View style={styles.list}>
          {professionalActivities.map((activity) => (
            <View key={activity} style={styles.listItem}>
              <View style={styles.dot} />
              <Text style={styles.itemText}>{activity}</Text>
            </View>
          ))}
        </View>
      </AppCard>

      <AppCard style={styles.noteCard}>
        <Text style={styles.note}>
          Além das experiências profissionais, desenvolvo projetos próprios com foco em aplicações
          web, mobile, backend e inteligência artificial.
        </Text>
      </AppCard>
    </Screen>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: 16,
  },
  currentCard: {
    borderColor: colors.primary,
    backgroundColor: colors.surfaceElevated,
  },
  roleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  role: {
    flex: 1,
    color: colors.text,
    fontSize: 20,
    fontWeight: '800',
  },
  company: {
    color: colors.secondary,
    fontSize: 14,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  currentBadge: {
    overflow: 'hidden',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: colors.primary,
    color: colors.text,
    fontSize: 12,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  list: {
    gap: 12,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  dot: {
    width: 8,
    height: 8,
    marginTop: 8,
    borderRadius: 99,
    backgroundColor: colors.secondary,
  },
  itemText: {
    flex: 1,
    color: colors.mutedText,
    fontSize: 15,
    lineHeight: 23,
  },
  noteCard: {
    borderColor: colors.primary,
    backgroundColor: colors.surfaceElevated,
  },
  note: {
    color: colors.text,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
});
