import { FC } from 'react';
import Card from '../ui/Card';
import { frontendCard } from '../utils/Data';

interface CardSectionProps {
    title: string;
    data: {
        id: number;
        title: string;
        src: string;
        exp: string;
        snippetCount: number;
    }[];
}

const CardSection: FC<CardSectionProps> = ({ title, data }) => {
    return (
        <section className="grid gap-5">
            <div className="text-xl font-bold text-highlight">{title}</div>
            <div className="grid grid-cols-5 gap-5">
                {data.map((card) => (
                    <Card
                        key={card.id}
                        title={card.title}
                        src={card.src}
                        exp={card.exp}
                        snippetCount={card.snippetCount}
                    />
                ))}
            </div>
        </section>
    );
};

export default CardSection;
