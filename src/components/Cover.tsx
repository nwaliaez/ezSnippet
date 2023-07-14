import { FC } from 'react';
import ProfilePic from './cover/ProfilePic';
import ProfileName from './cover/ProfileName';
import Menu from './cover/Menu';
import Button from './ui/Button';
import { UserPlus2 } from 'lucide-react';

interface CoverProps {}

const Cover: FC<CoverProps> = ({}) => {
    return (
        <div className="flex rounded-lg w-full h-32 p-10 bg-[url('/images/cover.jpeg')] bg-no-repeat bg-cover relative">
            <div className="flex h-40 w-full relative -bottom-5 gap-10">
                <ProfilePic />
                <div className="flex flex-1 flex-col justify-end gap-4">
                    <div className="flex justify-between">
                        <ProfileName />
                        <Button variant="primary">
                            <UserPlus2 /> Follow
                        </Button>
                    </div>
                    <Menu />
                </div>
            </div>
        </div>
    );
};

export default Cover;
