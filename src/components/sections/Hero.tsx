import { FC } from 'react';
import Intro from './hero/Intro';
import Stats from './hero/Stats';

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
    return (
        <section className="flex mt-10">
            <Intro />
            <Stats />
        </section>
    );
};

export default Hero;
