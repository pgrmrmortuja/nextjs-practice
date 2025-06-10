import getPost from '@/lib/getPost';
import React from 'react'

export async function generateMetadata({ params }) {

    const { id } = params;
    const post = await getPost(id);

    return {
        title: post.title,
        description: post.body,
    }
};

export default async function PostPage({ params }) {
    const { id } = params;

    const post = await getPost(id);
    console.log(post.id);

    return (
        <div>
            <h2>{post.title}</h2>
        </div>
    )
}
