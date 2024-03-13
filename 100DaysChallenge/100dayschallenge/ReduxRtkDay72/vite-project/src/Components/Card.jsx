import React from 'react'

function Card({title , price , description , category , image}) {
  return (
    <div>

<div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src={image} alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{title}</div>
    <p class="text-gray-700 text-base">
        {description}
    </p>
  </div>
  <div class="px-6 py-4">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{price}</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{category}</span>
 
  </div>
</div>



    </div>
  )
}

export default Card