import axios from 'axios'
import React, {useState, useEffect, use} from 'react'

function DataFetching() {

    const [post, setPost] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log(res)
            setPost(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    })

  return (
    <div>
        <ul>
            {
                post.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
        </ul>
    </div>
  )
}

export default DataFetching