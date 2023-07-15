import { FC } from 'react';

interface ProfileNameProps {}

const ProfileName: FC<ProfileNameProps> = ({}) => {
    return (
        <div className="text-3xl flex flex-col font-bold text-highlight">
            Neeraj Walia
            <div className="text-sm font-thin">@ezSnippet</div>
        </div>
    );
};

export default ProfileName;
