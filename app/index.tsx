import { Href, useRouter } from 'expo-router';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { AppCard } from '../components/AppCard';
import { Screen } from '../components/Screen';
import { colors } from '../constants/colors';

const avatarImage = require('../assets/me.png');

type QuickAction = {
  title: string;
  icon: string;
  href: Href;
};

type TechnologyGroup = {
  title: string;
  technologies: string[];
};

const quickActions: QuickAction[] = [
  { title: 'Sobre', icon: 'ID', href: '/sobre' },
  { title: 'Acadêmica', icon: 'UN', href: '/experiencia-academica' },
  { title: 'Profissional', icon: 'TI', href: '/experiencia-profissional' },
  { title: 'Projetos', icon: 'PR', href: '/projetos' },
  { title: 'Jogo', icon: 'JG', href: '/jogo' },
  { title: 'Contato', icon: '@', href: '/contato' },
];

const technologyGroups: TechnologyGroup[] = [
  {
    title: 'Backend',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL'],
  },
  {
    title: 'Frontend/Mobile',
    technologies: ['Vue', 'React', 'React Native', 'Expo'],
  },
  {
    title: 'Ferramentas',
    technologies: ['Docker', 'Git/GitHub', 'IA Local'],
  },
];

export default function HomeScreen() {
  const router = useRouter();

  function goToRoute(href: Href) {
    router.push(href);
  }

  return (
    <Screen contentStyle={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Portfólio</Text>
        <Text style={styles.headerSubtitle}>Bem-vindo ao meu currículo digital.</Text>
      </View>

      <AppCard style={styles.profileCard}>
        <View style={styles.profileRow}>
          <Image source={avatarImage} style={styles.avatar} />

          <View style={styles.profileInfo}>
            <Text style={styles.name}>Leonardo Chaves</Text>
            <Text style={styles.role}>Desenvolvedor em formação</Text>
            <Text style={styles.stack}>Backend • Web • Mobile • IA</Text>
          </View>
        </View>
      </AppCard>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Ações rápidas</Text>
        <Text style={styles.sectionSubtitle}>Atalhos para navegar pelo app.</Text>
      </View>

      <View style={styles.actionsGrid}>
        {quickActions.map((action) => (
          <Pressable
            key={action.title}
            onPress={() => goToRoute(action.href)}
            style={({ pressed }) => [styles.actionCard, pressed && styles.pressedCard]}
          >
            <View style={styles.actionIcon}>
              <Text style={styles.actionIconText}>{action.icon}</Text>
            </View>
            <Text style={styles.actionTitle}>{action.title}</Text>
          </Pressable>
        ))}
      </View>

      <AppCard style={styles.gameCard}>
        <View style={styles.gameContent}>
          <View style={styles.gameText}>
            <Text style={styles.gameLabel}>Filmes</Text>
            <Text style={styles.gameTitle}>Jogo da Forca</Text>
            <Text style={styles.gameSubtitle}>Adivinhe filmes direto dentro do app.</Text>
          </View>

          <Pressable
            onPress={() => goToRoute('/jogo')}
            style={({ pressed }) => [styles.gameButton, pressed && styles.pressedButton]}
          >
            <Text style={styles.gameButtonText}>Jogar agora</Text>
          </Pressable>
        </View>
      </AppCard>

      <AppCard style={styles.techCard} compact>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Tecnologias</Text>
          <Text style={styles.sectionSubtitle}>Stack principal por categoria.</Text>
        </View>

        <View style={styles.techGroups}>
          {technologyGroups.map((group) => (
            <View key={group.title} style={styles.techGroup}>
              <Text style={styles.techGroupTitle}>{group.title}</Text>
              <View style={styles.badges}>
                {group.technologies.map((technology) => (
                  <MiniBadge key={technology} label={technology} />
                ))}
              </View>
            </View>
          ))}
        </View>
      </AppCard>
    </Screen>
  );
}

function MiniBadge({ label }: { label: string }) {
  return <Text style={styles.badge}>{label}</Text>;
}

const styles = StyleSheet.create({
  screen: {
    gap: 18,
    backgroundColor: colors.background,
  },
  header: {
    gap: 5,
    paddingTop: 4,
  },
  headerTitle: {
    color: colors.text,
    fontSize: 30,
    lineHeight: 36,
    fontWeight: '900',
  },
  headerSubtitle: {
    color: colors.muted,
    fontSize: 15,
    lineHeight: 21,
    fontWeight: '600',
  },
  profileCard: {
    padding: 18,
    backgroundColor: colors.surface,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  avatar: {
    width: 76,
    height: 76,
    borderRadius: 38,
    borderWidth: 2,
    borderColor: colors.primaryLight,
    backgroundColor: colors.surfaceLight,
  },
  profileInfo: {
    flex: 1,
    gap: 5,
  },
  name: {
    color: colors.text,
    fontSize: 25,
    lineHeight: 30,
    fontWeight: '900',
  },
  role: {
    color: colors.primaryLight,
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '800',
  },
  stack: {
    color: colors.muted,
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '700',
  },
  sectionHeader: {
    gap: 4,
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 19,
    lineHeight: 24,
    fontWeight: '900',
  },
  sectionSubtitle: {
    color: colors.muted,
    fontSize: 14,
    lineHeight: 20,
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  actionCard: {
    width: '31.4%',
    minHeight: 92,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 9,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 10,
    backgroundColor: colors.surface,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.16,
    shadowRadius: 10,
    elevation: 3,
  },
  actionIcon: {
    width: 34,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
  },
  actionIconText: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: '900',
  },
  actionTitle: {
    color: colors.text,
    fontSize: 13,
    lineHeight: 17,
    fontWeight: '900',
    textAlign: 'center',
  },
  pressedCard: {
    opacity: 0.82,
    transform: [{ scale: 0.96 }],
  },
  gameCard: {
    borderColor: colors.primary,
    backgroundColor: colors.surfaceHighlight,
  },
  gameContent: {
    gap: 16,
  },
  gameText: {
    gap: 5,
  },
  gameLabel: {
    color: colors.primaryLight,
    fontSize: 12,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  gameTitle: {
    color: colors.text,
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '900',
  },
  gameSubtitle: {
    color: colors.text,
    opacity: 0.88,
    fontSize: 15,
    lineHeight: 21,
    fontWeight: '600',
  },
  gameButton: {
    minHeight: 46,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    backgroundColor: colors.primary,
  },
  gameButtonText: {
    color: colors.text,
    fontSize: 15,
    fontWeight: '900',
  },
  pressedButton: {
    opacity: 0.86,
    transform: [{ scale: 0.98 }],
  },
  techCard: {
    gap: 14,
    backgroundColor: colors.surface,
  },
  techGroups: {
    gap: 12,
  },
  techGroup: {
    gap: 7,
  },
  techGroupTitle: {
    color: colors.primaryLight,
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  badges: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 7,
  },
  badge: {
    overflow: 'hidden',
    borderRadius: 999,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 9,
    paddingVertical: 5,
    backgroundColor: colors.surfaceLight,
    color: colors.muted,
    fontSize: 12,
    lineHeight: 15,
    fontWeight: '800',
  },
});
