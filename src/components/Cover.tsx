'use client';
import { FC, RefObject, useEffect, useRef, useState } from 'react';
import ProfilePic from './cover/ProfilePic';
import ProfileName from './cover/ProfileName';
import Menu from './cover/Menu';
import Button from './ui/Button';
import { UserPlus2 } from 'lucide-react';

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
                        <Button variant="primary" sizes={'small'}>
                            <UserPlus2 /> Follow
                        </Button>
                    </div>
                    {/* <Menu /> */}
                </div>
            </div>
        </div>
    );
};

export default Cover;
