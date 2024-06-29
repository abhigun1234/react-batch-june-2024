import axios from 'axios';
import React, { Component } from 'react';

class GetApi extends Component {

    constructor(){
        super()
        this.state={posts:[]}
    }
    render() {

        return (
            <div>
                <div>{ this.state.posts.length ?
          this.state.posts.map(post => 
           
            <div>
                
                <h1>{post.title}</h1>
                <h1>{post.userId}</h1>
                </div>
           
          ):"data loading"
        }</div>
            </div>
        );
    }
    componentDidMount(){

        console.log("calling")
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{
         console.log("res",res)
        this.setState({ posts: res.data })
         console.log("this.state.posts",this.state.posts)
        }).catch(error=>{

            console.log("error",error)
        })
        
    }
}

export default GetApi;