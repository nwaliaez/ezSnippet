import List from '@/components/ui/List';
import { Eye, ThumbsUp, User, Video } from 'lucide-react';
import { FC } from 'react';

interface StatsProps {}

const Stats: FC<StatsProps> = ({}) => {
    return (
        <div className="hidden md:flex flex-col w-max px-4 gap-5 text-info">
            <List link="/instagram" sizes="xs" className="gap-4">
                <User size={16} />
                <span>
                    <b className="text-secondary">106k</b> Followers
                </span>
            </List>
            <List link="/instagram" sizes="xs" className="gap-4">
                <Video size={16} />
                <span>
                    <b className="text-secondary">102</b> Videos
                </span>
            </List>
            <List link="/instagram" sizes="xs" className="gap-4">
                <Eye size={16} />
                <span>
                    <b className="text-secondary">100M</b> Views
                </span>
            </List>
            <List link="/instagram" sizes="xs" className="gap-4">
                <ThumbsUp size={16} />
                <span>
                    <b className="text-secondary">28.3M</b> Likes
                </span>
            </List>
        </div>
    );
};

export default Stats;
