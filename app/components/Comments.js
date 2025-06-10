import React from 'react'

export default async function Comments({promise}) {

    const comments = await promise;
    return (
        <div className='mt-5'>
            <h2>Post Comments:</h2>

            <ul>
                {
                    comments.map((comment) => (
                        <li className='mb-2' key={comment.id}>{comment.body}</li>
                    ))
                }
            </ul>

        </div>
    )
}
