import { FC } from 'react';
import Input from '../ui/Input';

interface LabelProps {
    label: string;
    type?: string;
}

const Label: FC<LabelProps> = ({ label, type }) => {
    return (
        <label>
            <div className="ml-5 text-xs -mb-2 bg-cardPrimary relative z-50 px-1 w-max">
                {label}
            </div>
            <Input variant="border" type={type || 'text'} sizes="medium" />
        </label>
    );
};

export default Label;
