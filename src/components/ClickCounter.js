import React, { Component } from 'react'
import { UserConsumer } from './Context'

class ClickCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }

    incrementNumber = () => {
        this.setState(prevState => {
            return { count: prevState.count + 1 }
        })
    }

  render() {
    const { count } = this.state
    return (
    <div>
      <button onClick={this.incrementNumber}>Clicked {count} times</button>
        <UserConsumer>
            {username => {
                return <h1>Hello, {username}</h1>
            }}
        </UserConsumer>
      
    </div>

    )
  }
}

export default ClickCounter