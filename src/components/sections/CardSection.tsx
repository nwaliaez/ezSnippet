import { FC } from 'react';
import Card from '../ui/Card';

interface CardSectionProps {
    title: string;
    data: {
        id: number;
        title: string;
        src: string;
        exp: string;
        snippetCount: number;
        progress: number;
    }[];
}

const CardSection: FC<CardSectionProps> = ({ title, data }) => {
    return (
        <section className="grid gap-5 p-5 md:p-0">
            <div className="text-xl font-bold text-highlight">{title}</div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl::grid-cols-5 gap-5">
                {data.map((card) => (
                    <Card
                        key={card.id}
                        title={card.title}
                        src={card.src}
                        exp={card.exp}
                        snippetCount={card.snippetCount}
                        progress={card.progress}
                    />
                ))}
            </div>
        </section>
    );
};

export default CardSection;
