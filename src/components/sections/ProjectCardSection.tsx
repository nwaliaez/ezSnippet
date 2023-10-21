import { FC } from 'react';
import ProjectsCard from '../ui/ProjectsCard';
import { IProjectSectionCardData } from '../utils/Data';

interface ProjectCardSectionProps {
  title: string;
  data: IProjectSectionCardData[];
}

const ProjectCardSection: FC<ProjectCardSectionProps> = ({ title, data }) => {
  return (
    <section className="grid gap-8 p-5 mt-5 md:p-0">
      <div className="text-xl font-medium text-zinc-200">{title}</div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl::grid-cols-4 gap-5">
        {data.map((card) => (
          <ProjectsCard
            href={card.href}
            key={card.id}
            title={card.title}
            src={card.imageUrl}
            techStack={card.techStack}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectCardSection;
