import React from 'react'
export default function SearchItem() {

    const Handler = () => {
        let text = document.querySelector('#dataText');
        let convert = text.value;
        
        let valueShow = document.createElement('p');
        valueShow.innerHTML = `<p>${convert} </p> `;
        text.appendChild(valueShow)
    }
    return (
        <>
            <div className="seacthBox flex justify-evenly">
                <input type="text" placeholder='write your work here'
                    id='dataText'
                    className='p-1 outline-dotted w-2/3 outline-none'
                />
                <button
                    onClick={Handler}
                    className=' bg-black text-white text-center p-2 rounded-xl w-28'>add</button>
            </div>

        </>
    )
}
