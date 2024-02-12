import React from 'react'
import Random from './Random';
function RandomDataCheck(props) {
    const data = data.props;

    return (
        <div>
            {data.map((value) => (
                <Random key={value.id} {...data} />
            ))}

        </div>
    )
}

export default RandomDataCheck