import { StyleSheet, Text } from 'react-native';

import { colors } from '../constants/colors';

type TechBadgeProps = {
  label: string;
};

export function TechBadge({ label }: TechBadgeProps) {
  return <Text style={styles.badge}>{label}</Text>;
}

const styles = StyleSheet.create({
  badge: {
    overflow: 'hidden',
    borderRadius: 999,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 12,
    paddingVertical: 7,
    backgroundColor: colors.surfaceElevated,
    color: colors.mutedText,
    fontSize: 13,
    fontWeight: '700',
  },
});
