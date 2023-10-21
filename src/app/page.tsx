import Cover from '@/components/Cover';
import CardSection from '@/components/sections/CardSection';
import MoreProjects from '@/components/sections/MoreProjects';
import Hero from '@/components/sections/Hero';
import ProjectCardSection from '@/components/sections/ProjectCardSection';
import {
  backendCard,
  databaseCard,
  devopsCards,
  frontendCard,
  moreProjects,
  otherCards,
  projectCard,
  web3Cards,
} from '@/components/utils/Data';

export default function Home() {
  return (
    <div>
      <Cover />
      <div className="flex flex-col gap-10 lg:px-10">
        {/* <Hero /> */}
        <ProjectCardSection title="Projects" data={projectCard} />
        <MoreProjects title="More projects" data={moreProjects} />

        <CardSection title="Web3" data={web3Cards} />
        <CardSection title="Others" data={otherCards} />
      </div>
    </div>
  );
}
