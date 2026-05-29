import { View } from 'react-native';

import { ProjectCard } from '../components/ProjectCard';
import { Screen } from '../components/Screen';
import { SectionTitle } from '../components/SectionTitle';
import { projects } from '../constants/data';

export default function ProjetosScreen() {
  return (
    <Screen>
      <SectionTitle
        eyebrow="Portfólio"
        title="Projetos"
        subtitle="Seleção de sistemas acadêmicos, produtos próprios e sites comerciais."
      />

      <View style={{ gap: 14 }}>
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </View>
    </Screen>
  );
}
