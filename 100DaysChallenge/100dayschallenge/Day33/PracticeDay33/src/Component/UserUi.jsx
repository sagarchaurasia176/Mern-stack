import React from 'react'

function UserUi({id,name,username,email,address,phone,website}) {
    return (
        <>
            <div className="container text-black  m-auto w-2/3 bg-slate-50 shadow-xl">
                <table border={3} 
                className=' m-auto '
                >
                   <thead>
                        <tr>
                            <th>name</th>
                            <th>userName</th>
                            <th>Emails</th>
                        </tr>
                    </thead>
                <tbody>
                <tr>
                    <td>{name}</td>
                    <td>{username}</td>
                    <td>{email}</td>
                </tr>
                </tbody>
                </table>
            </div>
            </>  

    )

}

export default UserUi