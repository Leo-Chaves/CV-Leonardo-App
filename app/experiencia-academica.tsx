import { StyleSheet, Text, View } from 'react-native';

import { AppCard } from '../components/AppCard';
import { Screen } from '../components/Screen';
import { SectionTitle } from '../components/SectionTitle';
import { colors } from '../constants/colors';
import { academicExperiences } from '../constants/data';

export default function ExperienciaAcademicaScreen() {
  return (
    <Screen>
      <SectionTitle
        eyebrow="UNICAP"
        title="Experiência Acadêmica"
        subtitle="Formação em tecnologia com foco prático em desenvolvimento de sistemas."
      />

      <AppCard style={styles.card}>
        <Text style={styles.heading}>Formação acadêmica</Text>
        <Text style={styles.text}>
          Cursando Ciência da Computação na UNICAP, com foco no desenvolvimento de sistemas web,
          mobile, backend e soluções com inteligência artificial.
        </Text>
      </AppCard>

      <AppCard style={styles.card}>
        <Text style={styles.heading}>Vivências acadêmicas</Text>
        <View style={styles.list}>
          {academicExperiences.map((experience) => (
            <View key={experience} style={styles.listItem}>
              <View style={styles.dot} />
              <Text style={styles.itemText}>{experience}</Text>
            </View>
          ))}
        </View>
      </AppCard>
    </Screen>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: 12,
  },
  heading: {
    color: colors.text,
    fontSize: 19,
    fontWeight: '800',
  },
  text: {
    color: colors.mutedText,
    fontSize: 16,
    lineHeight: 24,
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
});
