import React, { Component } from 'react'

class FormHandle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        username: ''
      }
    }

    ChangeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

  render() {
    return (
      <div>
        <label>Username</label>
        <input type="text" value={this.state.username} onChange={this.ChangeUsername}/>
      </div>
    )
  }
}

export default FormHandle
