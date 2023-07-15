import { FC } from 'react';
import ProfilePic from './cover/ProfilePic';
import ProfileName from './cover/ProfileName';
import Button from './ui/Button';
import { Instagram } from 'lucide-react';
import Link from 'next/link';

interface CoverProps {}

const Cover: FC<CoverProps> = ({}) => {
    return (
        <div
            className={`flex rounded-lg w-full  bg-[url('/images/cover.jpeg')] bg-no-repeat bg-cover`}
        >
            <div className="flex px-10 py-5 bg-blur backdrop-filter backdrop-blur-md w-full gap-10">
                <ProfilePic />
                <div className="flex flex-1 flex-col justify-center gap-4">
                    <div className="flex justify-between">
                        <ProfileName />
                        <Link href="https://instagram.com/ezSnippet">
                            <Button variant="primary" sizes={'small'}>
                                <Instagram /> Follow me on Instagram
                            </Button>
                        </Link>
                    </div>
                    {/* <Menu /> */}
                </div>
            </div>
        </div>
    );
};

export default Cover;
