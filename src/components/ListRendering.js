import React from 'react'

 function ListRendering() {
 const Heros = ['Iron Man', 'Spider Man', 'Hulk']
 const HerosList = Heros.map((Hero, index) => <h1 key={index}>{index}{Hero}</h1> )
  return (
    <div>
        {HerosList}
    </div>
  )
}
export default ListRendering