import React, { Component } from 'react'
class Destruc extends Component {
    constructor() {
        super()
        data: [
            {
                "userId": 1,
                "id": 1,
                "title": "delectus aut autem",
                "completed": false
            },
            {
                "userId": 1,
                "id": 2,
                "title": "quis ut nam facilis et officia qui",
                "completed": false
            },
            {
                "userId": 1,
                "id": 5,
                "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
                "completed": false
            },
            {
                "userId": 1,
                "id": 10,
                "title": "illo est ratione doloremque quia maiores aut",
                "completed": true
            },
            {
                "userId": 1,
                "id": 11,
                "title": "vero rerum temporibus dolor",
                "completed": true
            },
        ]
    }
    render(){
        const [userId, id, title] = this.state;
        return (
            <div>
                <p>{userId}</p>
                <p>{title}</p>
                <p>{id}</p>
            </div>
        )
    }
}

export default Destruc;