import { FC } from 'react';
import { IProjectSectionCardData } from '../utils/Data';
import MoreProjectsCards from '../ui/MoreProjectCards';
import TechStack from '../TechStack';
import Introduction from '../Introduction';

interface MoreProjectsProps {
  title: string;
  data: IProjectSectionCardData[];
}

const MoreProjects: FC<MoreProjectsProps> = ({ title, data }) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-5 mt-5 md:p-0">
      <TechStack />
      <div className="grid bg-cardPrimary gap-6 p-6 shadow-lg">
        <div className="text-xl font-medium mt-2 text-zinc-200">{title}</div>
        <div className="grid grid-cols-1 gap-4 rounded-lg">
          {data.map((card) => (
            <MoreProjectsCards
              href={card.href}
              key={card.id}
              title={card.title}
              icon={card.icon || ''}
              techStack={card.techStack}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreProjects;
