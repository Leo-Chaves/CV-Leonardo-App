import { StyleSheet, Text, View } from 'react-native';

import { Project } from '../constants/data';
import { AppCard } from './AppCard';
import { TechBadge } from './TechBadge';
import { colors } from '../constants/colors';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <AppCard style={styles.card}>
      <Text style={styles.title}>{project.name}</Text>
      <Text style={styles.description}>{project.description}</Text>
      <View style={styles.badges}>
        {project.technologies.map((technology) => (
          <TechBadge key={technology} label={technology} />
        ))}
      </View>
    </AppCard>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: 12,
  },
  title: {
    color: colors.text,
    fontSize: 19,
    lineHeight: 24,
    fontWeight: '800',
  },
  description: {
    color: colors.mutedText,
    fontSize: 15,
    lineHeight: 22,
  },
  badges: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
});
