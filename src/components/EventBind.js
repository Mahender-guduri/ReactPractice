import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'hello'
      }
    }

    // ClickEvent(){
    //      this.setState({
    //          message: 'Good evening'
    //      })
    // }
    ClickEvent = () => {
         this.setState({
             message: 'Good evening'
         })
    }


  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={() => this.ClickEvent()}>click</button> */}
        <button onClick={this.ClickEvent}>click</button>
      </div>
    )
  }
}

export default EventBind