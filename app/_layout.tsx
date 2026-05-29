import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { colors } from '../constants/colors';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: colors.background },
          headerTintColor: colors.text,
          headerTitleStyle: { fontWeight: '800' },
          headerShadowVisible: false,
          contentStyle: { backgroundColor: colors.background },
        }}
      >
        <Stack.Screen name="index" options={{ title: 'Portfólio' }} />
        <Stack.Screen name="sobre" options={{ title: 'Sobre' }} />
        <Stack.Screen name="experiencia-academica" options={{ title: 'Experiência Acadêmica' }} />
        <Stack.Screen
          name="experiencia-profissional"
          options={{ title: 'Experiência Profissional' }}
        />
        <Stack.Screen name="projetos" options={{ title: 'Projetos' }} />
        <Stack.Screen name="jogo" options={{ title: 'Jogo da Forca' }} />
        <Stack.Screen name="contato" options={{ title: 'Contato' }} />
      </Stack>
    </>
  );
}
