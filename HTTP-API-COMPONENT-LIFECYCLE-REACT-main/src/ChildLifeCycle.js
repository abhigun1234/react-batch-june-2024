import React, { Component } from 'react'

export default class ChildLifeCycle extends Component {
  //1
    constructor(props){
        super(props)
       console.log("constructor called of child")
    }
    //2
  render() {
    console.log("render called of child")
    return (
      <div>ParentLifeCycle</div>
    )
  }
  //3
  componentDidMount(){

    console.log("componentDidMount called of child")
  }
}
