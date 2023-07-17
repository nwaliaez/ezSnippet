'use client';
import { FC, ReactNode, createContext, useContext, useState } from 'react';

interface ContactFormProviderProps {
    children: ReactNode;
}

const ContactContext = createContext({
    showForm: false,
    setFormVisibility: () => {},
});

const ContactFormProvider: FC<ContactFormProviderProps> = ({ children }) => {
    const [showForm, setShowForm] = useState(false);
    const setFormVisibility = () => {
        console.log('Asd');
        setShowForm(!showForm);
    };
    return (
        <ContactContext.Provider value={{ showForm, setFormVisibility }}>
            {children}
        </ContactContext.Provider>
    );
};

export const useContact = () => useContext(ContactContext);

export default ContactFormProvider;
