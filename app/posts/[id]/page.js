import Comments from '@/app/components/comments';
import getPost from '@/lib/getPost';
import getPostComment from '@/lib/getPostComment';
import React, { Suspense } from 'react'

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

    const postPromise = getPost(id);
    const commentsPromise = getPostComment(id);

    // const [post, comments] = await Promise.all([postPromise, commentsPromise]);

    const post = await postPromise;

    console.log(post.id);

    return (
        <div>
            <h2>{post.title}</h2>

            <hr></hr>

            <Suspense fallback={<h1>Loading Comments...</h1>}>
                <Comments promise={commentsPromise}></Comments>
            </Suspense>

        </div>
    )
}
