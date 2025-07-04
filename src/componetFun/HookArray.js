import React, {useState} from 'react'

function HookArray() {
    const [items, setIteams] = useState([])

    const addItem = ()=>{
        setIteams([...items,{
            id: items.length,
            value: Math.floor(Math.random()*10)+1
        }] )
    }
  return (
    <div>
        <button onClick={addItem}>Add Number</button>
        <ul>
            {items.map(item => (
                <li key={item.id}>{item.value}</li>
            ))}
        </ul>
    </div>
  )
}
//changes


export default HookArray