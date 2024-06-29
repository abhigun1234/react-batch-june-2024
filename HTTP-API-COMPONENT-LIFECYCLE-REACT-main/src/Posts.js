import React, { Component } from 'react'
import axios from 'axios'
export default class Posts extends Component {
    constructor(props){
        super(props)
        this.state={
            posts:[]
        }

    }
    componentDidMount(){

        axios.get('https://jsonplaceholder.typicode.com/posts').then(response=>{
            console.log("response",response)
            this.setState({posts:response.data})
        })
    }
  render() {
    return (
      <div >Posts

{/* {
          this.state.posts.length ?  this.state.posts.map(post=><div key={post.id}>{post}</div>):null
      } */}

      {this.state.posts.map(post=><div key={post.id}>{post.title}</div>)}
      </div>
      
    )
  }
}
