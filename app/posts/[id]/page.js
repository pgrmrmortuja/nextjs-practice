import getPost from '@/lib/getPost';
import getPostComment from '@/lib/getPostComment';
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

    const postPromise = getPost(id);
    const commentsPromise = getPostComment(id);

    const [post, comments] = await Promise.all([postPromise, commentsPromise]);

    console.log(post.id);

    return (
        <div>
            <h2>{post.title}</h2>

            <hr></hr>
            <div className='mt-5'>
                <h2>Post Comments:</h2>

                <ul>
                    {
                        comments.map((comment) =>(
                            <li className='mb-2' key={comment.id}>{comment.body}</li>
                        ))
                    }
                </ul>

            </div>
        </div>
    )
}
