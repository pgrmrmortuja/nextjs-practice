import Link from 'next/link';
import React from 'react';

const BlogsPage = () => {
    const blogs = [
        {
            id: '1',
            title: 'Blog 1',
            description: 'This is the blog 1.',
        },
        {
            id: '2',
            title: 'Blog 2',
            description: 'This is the blog 2.',
        },
        {
            id: '3',
            title: 'Blog 3',
            description: 'This is the blog 3.',
        },
    ]
    return (
        <div>
            <h1>this is blog page</h1>
            {
                blogs.map((blog =>(
                    <li key={blog.id}>
                        <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
                    </li>
                )))
            }
        </div>
    );
};

export default BlogsPage;