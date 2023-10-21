import { FC } from 'react';
import { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectsCardProps {
  title: string;
  src?: string;
  href?: string;
  techStack: string;
}

const ProjectsCard: FC<ProjectsCardProps> = ({
  title,
  src,
  href,
  techStack,
}) => {
  return (
    <Link target="_blank" href={href || '/'}>
      <div className="flex flex-col overflow-hidden gap-3 bg-white text-zinc-800 rounded-lg overflow-ellipsis">
        <Image
          src={`/projects/${src}`}
          alt="spotify"
          width={700}
          height={700}
          className="aspect-video object-cover"
        />
        <div className="flex flex-col px-4 py-2 h-24">
          <div className="flex font-bold">{title}</div>
          <div className="flex text-info text-xs">{techStack}</div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectsCard;
