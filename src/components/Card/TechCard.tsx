import { Image, ImageIcon } from 'lucide-react';
import { FC } from 'react';
import { cn } from '../utils/utils';
import Button from '../ui/Button';

interface TechCardProps {
  title: string;
  classaName: string;
  tech: string[];
}

const TechCard: FC<TechCardProps> = ({ title, classaName, tech }) => {
  return (
    <div className="flex-1 flex flex-col gap-4 bg-cardPrimary p-4 rounded-md shadow-lg">
      <div className="text-primary font-medium text-lg tracking-wider">
        {title}
      </div>
      <div className="flex flex-wrap gap-2">
        {tech.map((item, i) => (
          <div
            key={i}
            className={cn(
              'rounded-md bg-body text-xs text-primary p-2',
              item === 'Tailwind' && 'border border-blue-500/60',
              item === 'Javascript' && 'border border-yellow-500/60',
              item === 'React Js' && 'border border-blue-500/60',
              item === 'Next Js 13' && 'border border-black/60',
              item === 'Node Js' && 'border border-green-500/60',
              item === 'Express Js' && 'border border-gray-500/60',
              item === 'MySql' && 'border border-blue-500/60',
              item === 'MongoDB' && 'border border-emerald-500/60',
              item === 'PostgreSQL' && 'border border-blue-500/60',
              item === 'Redis' && 'border border-red-500/60',
              item === 'Elastic Search' && 'border border-yellow-500/60',
              item === 'Docker' && 'border border-blue-500/60',
              item === 'Kubernetes' && 'border border-blue-500/60',
              item === 'GIT' && 'border border-orange-500/60',
              item === 'Terraform' && 'border border-purple-500/60',
              item === 'AWS' && 'border border-yellow-500/60'
            )}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechCard;
