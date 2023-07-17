import { FC } from 'react';
import {
    Code,
    Flame,
    Github,
    Home,
    Image as ImageIcon,
    Instagram,
    Layers,
    Linkedin,
    Share2,
    ShoppingCart,
    Ticket,
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
            <List link="/" effect="slideUp">
                <Flame /> Trending
            </List>
            <List link="/" effect="slideUp">
                <Code /> Snippets
            </List>
            <List link="https://www.instagram.com/ezsnippet/" effect="slideUp">
                <Video /> Videos
            </List>

            {/* List 2 */}
            <div className="mt-5">Socials</div>
            <List link="https://www.instagram.com/ezsnippet/" effect="slideUp">
                <Instagram color="#b5179e" /> Instagram
            </List>
            <List link="https://github.com/nwaliaez" effect="slideUp">
                <Github color="#2a9d8f" /> Github
            </List>
            <List
                link="https://www.youtube.com/channel/UCWYz4W6m1toUP7x0M1od3fA"
                effect="slideUp"
            >
                <Youtube color="#e63946" /> Youtube
            </List>
            <List
                link="https://stackoverflow.com/users/20331641/neeraj-walia"
                effect="slideUp"
            >
                <Layers color="#f77f00" /> Stack overflow
            </List>
            <List
                link="https://stackoverflow.com/users/20331641/neeraj-walia"
                effect="slideUp"
            >
                <Linkedin color="#0277b5" /> Linkedin
            </List>

            {/* List 3 */}
            <div className="mt-5">Projects</div>
            <List link="https://github.com/nwaliaez/eCommerce" effect="slideUp">
                <ShoppingCart /> eCommerce
            </List>
            <List
                link="https://github.com/nwaliaez/HardhatLottery"
                effect="slideUp"
            >
                <Ticket /> Lottery
            </List>
            <List
                link="https://github.com/nwaliaez/filetransfer-webrtc"
                effect="slideUp"
            >
                <Share2 /> File Sharing
            </List>
            <List
                link="https://github.com/nwaliaez/dalleClone"
                effect="slideUp"
            >
                <ImageIcon /> Dalle Clone
            </List>
        </div>
    );
};

export default Menu;
