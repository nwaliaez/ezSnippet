'use client';
import { FC, ReactNode, createContext, useContext, useState } from 'react';

interface ContactFormProviderProps {
    children: ReactNode;
}

const ContactContext = createContext({
    showForm: false,
    setFormVisibility: () => {},
});

export const ContactFormProvider: FC<ContactFormProviderProps> = ({
    children,
}) => {
    const [showForm, setShowForm] = useState(false);
    const setFormVisibility = () => {
        setShowForm(!showForm);
        !showForm
            ? (document.body.style.overflow = 'hidden')
            : (document.body.style.overflow = 'auto');
    };
    return (
        <ContactContext.Provider value={{ showForm, setFormVisibility }}>
            {children}
        </ContactContext.Provider>
    );
};

export const useContact = () => useContext(ContactContext);

interface MenuProviderProps {
    children: ReactNode;
}

const MenuContext = createContext({
    showMenu: false,
    showMenuVisibility: () => {},
});

export const MenuProvider: FC<MenuProviderProps> = ({ children }) => {
    const [showMenu, setShowMenu] = useState(false);
    const showMenuVisibility = () => {
        setShowMenu(!showMenu);
        !showMenu
            ? (document.body.style.overflow = 'hidden')
            : (document.body.style.overflow = 'auto');
    };
    return (
        <MenuContext.Provider value={{ showMenu, showMenuVisibility }}>
            {children}
        </MenuContext.Provider>
    );
};

export const useMenu = () => useContext(MenuContext);
