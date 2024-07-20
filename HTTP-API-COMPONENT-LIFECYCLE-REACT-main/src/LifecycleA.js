import React, { Component } from 'react'
import LifecycleB from './LifecycleB'
import axios from 'axios'

export default class LifecycleA extends Component {
    constructor(props){
     super(props)
     this.state={name:'Abhishek'}
     console.log("LifecycleA constructor")
    }
   static getDerivedStateFromProps(props,state){
       console.log("LifecycleA getDerivedStateFromProps")
       return null
    }
    changeState=()=>{
     this.setState({name:'ravi'})
    }
  render() {
    console.log("LifecycleA render")
    return (
      <div>LifecycleA
          <button onClick={this.changeState}>click</button>
          <LifecycleB></LifecycleB>
      </div>
      
    )
   
  }
  componentDidMount(){
    console.log("LifecycleA componentDidMount")
    axios.get('https://jsonplaceholder.typicode.com/todos').then(res=>{
      console.log("data",res)
    })


  }
  //updating phase
  shouldComponentUpdate(){
    console.log("LifecycleA shouldComponentUpdate")
    return false;
    
  }
  getSnapshotBeforeUpdate(previousprops,previosState){
    console.log("LifecycleA getSnapshotBeforeUpdate")
    return null;
  }
  componentDidUpdate(){
    console.log("LifecycleA componentDidUpdate")
  }
}

