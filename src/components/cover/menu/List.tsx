import { FC, ReactNode } from 'react';

interface ListProps {
    children: ReactNode;
}

const List: FC<ListProps> = ({ children }) => {
    return (
        <div className="text-secondary cursor-pointer transition-colors hover:text-highlight">
            {children}
        </div>
    );
};

export default List;
