'use client';
import { FC, MouseEvent, useEffect, useRef } from 'react';
import Label from './ContactForm/Label';
import Button from './ui/Button';
import { useContact } from './Provider';
import { X } from 'lucide-react';

interface ContactFormProps {}

const ContactForm: FC<ContactFormProps> = ({}) => {
    const { showForm, setFormVisibility } = useContact();

    const handleFormClick = (e: MouseEvent<HTMLFormElement>) => {
        // Prevent the click event from bubbling up to the outer div
        e.stopPropagation();
    };
    return (
        <>
            {showForm && (
                <div
                    className="h-screen bg-blur backdrop-filter backdrop-blur-sm bg-[rgba(0,0,0,0.9)] w-screen fixed z-40 flex items-center justify-center"
                    onClick={() => setFormVisibility()}
                >
                    <X className="text-primary absolute right-5 top-5 cursor-pointer" />
                    <form
                        onClick={handleFormClick}
                        className="grid gap-5 w-96 p-5 bg-cardPrimary rounded-lg text-info shadow-lg relative"
                    >
                        <Label label="Full Name" />
                        <Label label="Email" />
                        <Label label="Message" type="textarea" />
                        <Button
                            variant="highlight"
                            sizes="medium"
                            className="w-full"
                        >
                            Submit
                        </Button>
                    </form>
                </div>
            )}
        </>
    );
};

export default ContactForm;
