import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';

import { AppCard } from '../components/AppCard';
import { Screen } from '../components/Screen';
import { SectionTitle } from '../components/SectionTitle';
import { colors } from '../constants/colors';

type ContactItem = {
  label: string;
  value: string;
  action: string;
  initials: string;
};

const contacts: ContactItem[] = [
  {
    label: 'GitHub',
    value: 'github.com/Leo-Chaves',
    action: 'https://github.com/Leo-Chaves',
    initials: 'GH',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/leo-chaves-paz',
    action: 'https://www.linkedin.com/in/leo-chaves-paz/',
    initials: 'IN',
  },
  {
    label: 'Telefone',
    value: '(81) 984868970',
    action: 'https://wa.me/5581984868970',
    initials: 'WA',
  },
  {
    label: 'Instagram',
    value: '@l.euzinho',
    action: 'https://www.instagram.com/l.euzinho/',
    initials: 'IG',
  },
  {
    label: 'E-mail',
    value: 'leochaves007@gmail.com',
    action: 'mailto:leochaves007@gmail.com',
    initials: '@',
  },
];

export default function ContatoScreen() {
  async function openContact(action: string) {
    const canOpen = await Linking.canOpenURL(action);

    if (canOpen) {
      await Linking.openURL(action);
    }
  }

  return (
    <Screen>
      <SectionTitle
        eyebrow="Contato"
        title="Vamos conversar"
        subtitle="Meus principais canais para projetos, oportunidades e networking."
      />

      <AppCard style={styles.featureCard}>
        <Text style={styles.featureTitle}>Leonardo Chaves</Text>
        <Text style={styles.featureText}>
          Desenvolvedor em formação com foco em backend, web, mobile e soluções com inteligência
          artificial.
        </Text>
      </AppCard>

      <View style={styles.contactList}>
        {contacts.map((contact) => (
          <Pressable
            key={contact.label}
            onPress={() => openContact(contact.action)}
            style={({ pressed }) => [styles.contactCard, pressed && styles.pressedCard]}
          >
            <View style={styles.contactIcon}>
              <Text style={styles.contactIconText}>{contact.initials}</Text>
            </View>

            <View style={styles.contactInfo}>
              <Text style={styles.contactLabel}>{contact.label}</Text>
              <Text style={styles.contactValue}>{contact.value}</Text>
            </View>

            <Text style={styles.arrow}>›</Text>
          </Pressable>
        ))}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  featureCard: {
    gap: 8,
    borderColor: colors.primary,
    backgroundColor: colors.surfaceLight,
  },
  featureTitle: {
    color: colors.text,
    fontSize: 22,
    lineHeight: 28,
    fontWeight: '900',
  },
  featureText: {
    color: colors.muted,
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '600',
  },
  contactList: {
    gap: 12,
  },
  contactCard: {
    minHeight: 78,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 14,
    backgroundColor: colors.surface,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.14,
    shadowRadius: 12,
    elevation: 3,
  },
  pressedCard: {
    opacity: 0.82,
    transform: [{ scale: 0.98 }],
  },
  contactIcon: {
    width: 42,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surfaceLight,
  },
  contactIconText: {
    color: colors.primaryLight,
    fontSize: 13,
    fontWeight: '900',
  },
  contactInfo: {
    flex: 1,
    gap: 3,
  },
  contactLabel: {
    color: colors.text,
    fontSize: 16,
    lineHeight: 21,
    fontWeight: '900',
  },
  contactValue: {
    color: colors.muted,
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '600',
  },
  arrow: {
    color: colors.primaryLight,
    fontSize: 28,
    lineHeight: 30,
    fontWeight: '900',
  },
});
