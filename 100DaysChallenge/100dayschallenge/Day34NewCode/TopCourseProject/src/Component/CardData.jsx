import React from 'react'
import Card from './Card'

function CardData({apiDatas}) {
    return (
        <>
            {apiDatas.map((valueRecieve)=>{
              return <Card dataOfItApi {...valueRecieve} key={valueRecieve}/>
            })}
        </>

    )

}

export default CardData