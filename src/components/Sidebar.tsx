import { FC } from 'react';
import Logo from './sidebar/Logo';
import Menu from './sidebar/Menu';

interface SideBarProps {}

const SideBar: FC<SideBarProps> = ({}) => {
    return (
        <aside className="flex h-screen fixed w-[300px]">
            {/* Sidebar Container */}
            <div className="flex flex-col m-5 w-full">
                <Logo />
                <Menu />
            </div>
        </aside>
    );
};

export default SideBar;
