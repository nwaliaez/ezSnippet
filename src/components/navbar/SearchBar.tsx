import { Search } from 'lucide-react';
import { FC } from 'react';
import Input from '../ui/Input';

interface SearchProps {}

const SearchBar: FC<SearchProps> = ({}) => {
    return (
        <label className="flex items-center w-96">
            <Search size={20} />
            <Input placeholder="Search..." />
        </label>
    );
};

export default SearchBar;
