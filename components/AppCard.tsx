import { PropsWithChildren } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import { colors, shadows } from '../constants/colors';

type AppCardProps = PropsWithChildren<{
  style?: StyleProp<ViewStyle>;
  compact?: boolean;
}>;

export function AppCard({ children, style, compact = false }: AppCardProps) {
  return <View style={[styles.card, compact && styles.compact, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    padding: 18,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.card,
    ...shadows.card,
  },
  compact: {
    padding: 14,
    borderRadius: 14,
  },
});
