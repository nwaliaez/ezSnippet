import { FC } from 'react';
import {
    Code,
    Flame,
    Github,
    Home,
    Instagram,
    Layers,
    ShoppingCart,
    Video,
    Youtube,
} from 'lucide-react';
import List from '../ui/List';

interface MenuProps {}

const Menu: FC<MenuProps> = ({}) => {
    return (
        <div className="flex flex-col h-full p-5 bg-cardPrimary text-primary rounded-lg w-full">
            {/* List 1 */}
            <List link="/" effect="slideUp">
                <Home /> Home
            </List>
            <List link="/trending" effect="slideUp">
                <Flame /> Trending
            </List>
            <List link="/trending" effect="slideUp">
                <Code /> Snippets
            </List>
            <List link="/trending" effect="slideUp">
                <Video /> Videos
            </List>

            {/* List 2 */}
            <div className="mt-5">Socials</div>
            <List link="/home" effect="slideUp">
                <Instagram color="#b5179e" /> Instagram
            </List>
            <List link="/home" effect="slideUp">
                <Github color="#2a9d8f" /> Github
            </List>
            <List link="/home" effect="slideUp">
                <Youtube color="#e63946" /> Youtube
            </List>
            <List link="/home" effect="slideUp">
                <Layers color="#f77f00" /> Stack overflow
            </List>

            {/* List 3 */}
            <div className="mt-5">Projects</div>
            <List link="/home" effect="slideUp">
                <ShoppingCart /> eCommerce
            </List>
        </div>
    );
};

export default Menu;
