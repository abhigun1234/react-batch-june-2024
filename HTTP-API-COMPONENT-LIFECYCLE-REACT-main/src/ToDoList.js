import axios from 'axios';
import React, { Component } from 'react';

class ToDoList extends Component {
    constructor(){
        super()
         this.state={ToDoList:[]}
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
    componentDidMount(){
        console.log("axios call")
        axios.get('https://jsonplaceholder.typicode.com/todos').then(res=>{
            console.log("res",res.data)
        })
    }
}

export default ToDoList;