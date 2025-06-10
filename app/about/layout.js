import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: "About",
    description: "This is About Page",
};

const AboutLayout = ({ children }) => {
    return (
        <div>
            <nav>
                <ul className="flex gap-5">
                    <li><Link href={"/about/mission"}>Mission</Link></li>
                    <li><Link href={"/about/vision"}>Vision</Link></li>

                </ul>
            </nav>
            {children}
        </div>
    );
};

export default AboutLayout;