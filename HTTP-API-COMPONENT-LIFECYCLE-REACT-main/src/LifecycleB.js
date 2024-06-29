import React, { Component } from 'react'

export default class LifecycleB extends Component {
    constructor(props){
        super(props)
        this.state={name:'lyfecycleB'}
        console.log("LifecycleB constructor")
       }
       static getDerivedStateFromProps(props,state){
        console.log("LifecycleB getDerivedStateFromProps")
       return null
     }
     render() {
       console.log("LifecycleB render")
       return (
         <div>LifecycleB</div>
         
       )
      
     }
     componentDidMount(){
      console.log("LifecycleB componentDidMount")
    }
    //updating phase
    shouldComponentUpdate(){
      console.log("LifecycleB shouldComponentUpdate")
      return true;
      
    }
    getSnapshotBeforeUpdate(previousprops,previosState){
      console.log("LifecycleB getSnapshotBeforeUpdate")
      return null;
    }
    componentDidUpdate(){
      console.log("LifecycleB componentDidUpdate")
    }
}

