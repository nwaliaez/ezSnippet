'use client';
import { Grip, User } from 'lucide-react';
import { FC } from 'react';
import SearchBar from './navbar/SearchBar';
import Button from './ui/Button';
import { useContact } from './ContactFormProvider';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
    const { setFormVisibility } = useContact();
    return (
        <nav className="flex sticky shadow-md top-0 z-20 bg-body p-5 text-info justify-between">
            <SearchBar />
            <div className="flex items-center gap-5">
                <Button onClick={setFormVisibility}>
                    Contact Me <User size={18} />
                </Button>
                <Grip className="cursor-pointer hover:text-primary transition-colors" />
            </div>
        </nav>
    );
};

export default Navbar;
