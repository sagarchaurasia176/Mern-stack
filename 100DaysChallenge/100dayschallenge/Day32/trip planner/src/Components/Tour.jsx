import React from 'react'
import Card from './Card'
function Tour({ tripData }) {
    return (
        <>
            <div className="container grid-cols-3 grid  gap-3">
            {tripData.map((valueOFData) => {
                //all the data are passed from the objects
                return <Card {...valueOFData}> </Card>
            })}
            </div>
        

        </>
    )
}

export default Tour