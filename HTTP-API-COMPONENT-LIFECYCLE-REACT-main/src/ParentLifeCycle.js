import React, { Component } from 'react'
import ChildLifeCycle from './ChildLifeCycle'

export default class ParentLifeCycle extends Component {


  //1
    constructor(props){
        super(props)

        this.state={name:'abhi'}
       console.log("constructor called of parent")
    }
    //2
  render() {
    console.log("render called of parent")
    return (
      <div>{this.state.name}

      <ChildLifeCycle></ChildLifeCycle>
      </div>
      
    )
  }
  //3
  componentDidMount(){

    console.log("componentDidMount called of parent")
  }
}
