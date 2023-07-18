import Cover from '@/components/Cover';
import CardSection from '@/components/sections/CardSection';
import Hero from '@/components/sections/Hero';
import {
    backendCard,
    databaseCard,
    devopsCards,
    frontendCard,
    otherCards,
    projectCard,
    web3Cards,
} from '@/components/utils/Data';

export default function Home() {
    return (
        <div>
            <Cover />
            <div className="flex flex-col gap-10 lg:px-10">
                <Hero />
                <CardSection title="Projects" data={projectCard} />
                <CardSection title="Frontend" data={frontendCard} />
                <CardSection title="Backend" data={backendCard} />
                <CardSection title="Database" data={databaseCard} />
                <CardSection title="DevOps" data={devopsCards} />
                <CardSection title="Web3" data={web3Cards} />
                <CardSection title="Others" data={otherCards} />
            </div>
        </div>
    );
}
