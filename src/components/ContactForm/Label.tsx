'use client';
import { ChangeEvent, FC, InputHTMLAttributes } from 'react';
import Input from '../ui/Input';

interface LabelProps
    extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    label: string;
    readInput: ({ name, value }: { name: string; value: string }) => void;
}

const Label: FC<LabelProps> = ({ label, type, name, readInput, value }) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        readInput({ name, value });
    };
    return (
        <label>
            <div className="ml-5 text-xs -mb-2 bg-cardPrimary relative z-50 px-1 w-max">
                {label}
            </div>
            <Input
                onChange={handleChange}
                value={value}
                variant="border"
                name={name}
                type={type || 'text'}
                sizes="medium"
            />
        </label>
    );
};

export default Label;
