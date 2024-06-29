import React, { Component } from 'react';
import axios from 'axios';
class PostApiCall extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
    componentDidMount(){

        console.log("component did mount")
    
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response=>{
            console.log("response",response)
            this.setState({ posts: response.data })
        }).catch(error=>{
    
            console.log("error",error)
        })
      }
}

export default PostApiCall;