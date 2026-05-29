import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../constants/colors';

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
};

export function SectionTitle({ title, subtitle, eyebrow }: SectionTitleProps) {
  return (
    <View style={styles.container}>
      {eyebrow ? <Text style={styles.eyebrow}>{eyebrow}</Text> : null}
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
    marginBottom: 8,
  },
  eyebrow: {
    color: colors.secondary,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 0,
    textTransform: 'uppercase',
  },
  title: {
    color: colors.text,
    fontSize: 28,
    lineHeight: 34,
    fontWeight: '800',
  },
  subtitle: {
    color: colors.mutedText,
    fontSize: 16,
    lineHeight: 24,
  },
});
