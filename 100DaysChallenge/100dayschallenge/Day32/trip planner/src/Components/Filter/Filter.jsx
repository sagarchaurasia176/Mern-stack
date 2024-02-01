import React from 'react'

function Filter() {
    const people = [{
        id: 0, // Used in JSX as a key
        name: 'Creola Katherine Johnson',
        profession: 'mathematician',
        accomplishment: 'spaceflight calculations',
        imageId: 'MK3eW3A'
      }, {
        id: 1, // Used in JSX as a key
        name: 'Mario José Molina-Pasquel Henríquez',
        profession: 'chemist',
        accomplishment: 'discovery of Arctic ozone hole',
        imageId: 'mynHUSa'
      }, {
        id: 2, // Used in JSX as a key
        name: 'Mohammad Abdus Salam',
        profession: 'physicist',
        accomplishment: 'electromagnetism theory',
        imageId: 'bE7W1ji'
      }, {
        id: 3, // Used in JSX as a key
        name: 'Percy Lavon Julian',
        profession: 'chemist',
        accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
        imageId: 'IOjWm71'
      }, {
        id: 4, // Used in JSX as a key
        name: 'Subrahmanyan Chandrasekhar',
        profession: 'astrophysicist',
        accomplishment: 'white dwarf star mass calculations',
        imageId: 'lrWQx8l'
      }];
      
  
    return (
        <>
        {/* fitlter function is basicaly used to filterrate the particualr things */}
        {people.filter( (id, name) =>{
            {people.id !== 2} return console.log("your aren't teen");
            {people.name !== 'Subrahmanyan Chandrasekhar'} return console.log('youre name is not corrct');
        })}


        
    </>
  )
}

export default Filter