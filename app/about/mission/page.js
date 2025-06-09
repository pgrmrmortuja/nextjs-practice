import Button from '@/app/components/Button';
import React from 'react';
import nextimage from '@/public/next.svg';
import Image from 'next/image';

const MissionPage = () => {
    return (
        <div>
            <h1>This is Mission Page</h1>
            <Button></Button>
            <Image src={nextimage} alt='next js logo image' quality={100}></Image>
        </div>
    );
};

export default MissionPage;