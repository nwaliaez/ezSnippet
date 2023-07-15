import { VariantProps, cva } from 'class-variance-authority';
import { FC, InputHTMLAttributes, ReactNode } from 'react';
import { cn } from '../utils/utils';
import Link from 'next/link';

const listVariants = cva(['flex', 'items-center'], {
    variants: {
        variant: {
            primary: [
                'bg-transparent',
                'items-center',
                'placeholder:text-info',
            ],
            secondary: ['text-secondary', 'cursor-pointer'],
            info: ['text-info'],
        },
        effect: {
            none: [],
            slideUp: [
                'transform',
                'transition-transform',
                'duration-300',
                'hover:-translate-y-1',
            ],
            changeColor: [
                'transform',
                'transition-colors',
                'hover:text-highlight',
            ],
        },
        sizes: {
            xs: ['text-xs', 'gap-1'],
            small: ['text-sm', 'px-2', 'gap-4'],
            medium: ['text-sm', 'gap-4', 'p-4'],
        },
    },
    defaultVariants: {
        variant: 'primary',
        sizes: 'medium',
        effect: 'none',
    },
});

interface ListProps extends VariantProps<typeof listVariants> {
    link?: string;
    children: ReactNode;
    className?: string;
}

const List: FC<ListProps> = ({
    variant,
    sizes,
    className,
    children,
    effect,
    link,
}) => {
    return (
        <>
            {link ? (
                <Link
                    href={link}
                    className={cn(
                        listVariants({ variant, sizes, className, effect })
                    )}
                >
                    {children}
                </Link>
            ) : (
                <>
                    <div
                        className={cn(
                            listVariants({ variant, sizes, className, effect })
                        )}
                    >
                        {children}
                    </div>
                </>
            )}
        </>
    );
};

export default List;
