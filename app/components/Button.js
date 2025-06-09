"use client";
import React from 'react'

export default function Button() {
    return (
        <div>
            <button onClick={console.log("Clicked the button")} className='btn border-t-green-400'>Click Here</button>
        </div>
    )
}
