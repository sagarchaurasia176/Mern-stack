import React from 'react'
export default function ButtonStata() {
    const changeImg = () => {
        let crt = document.createElement('div');
        crt.innerHTML = `
     <img src=" https://images.pexels.com/photos/1174132/pexels-photo-1174132.jpeg?cs=srgb&dl=pexels-mike-1174132.jpg&fm=jpg" alt="" />
        `
        console.log("stored")

            document.body.append(crt);

    }

    return (

        <div>
            <button
                onClick={changeImg}
                className=' m-auto text-center bg-white text-red-400 rounded-r-sm'>Change image</button>
        </div>
    )
}
