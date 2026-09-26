import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorIndex = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className='flex flex-col items-center justify-center gap-10 '>
                <h1 className='text-4xl'>404 Not Found</h1>
                <NavLink className={"px-8 py-3 rounded-sm bg-green-500"} to={"/"}>Back To Home</NavLink>
            </div>
        </div>
    )
}

export default ErrorIndex
