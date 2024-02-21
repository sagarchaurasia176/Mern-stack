import React from 'react'

function Login() {
    return (
        <div className=' bg-yellow-100'>
            <input type="text"
                placeholder=' userName'
                class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500" />
            <input type="text"
            
                placeholder=' password'
                class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500" />

        </div>
    )
}

export default Login