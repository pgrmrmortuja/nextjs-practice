import { notFound } from 'next/navigation';
import React from 'react'

export default function BlogPage({params}) {
    const {id} = params;

    if(id === "4"){
      notFound();
    }
  return (
    <div>
        <h1>Single Blog Page</h1>
        <h5>This is blog No {id}</h5>

    </div>
  )
}
