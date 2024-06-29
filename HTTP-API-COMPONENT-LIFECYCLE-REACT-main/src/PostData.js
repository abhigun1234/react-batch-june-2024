import React, { Component } from 'react'
import axios from 'axios'
export default class PostData extends Component {

    constructor(){

        super()
        this.state={posts:[]}
    }
  render() {
    return (
      <div>Fetched data from api

          <div>
              {this.state.posts.map(post=><div>

                  {post.title}
              </div>)}
          </div>
      </div>
    )
  }
  componentDidMount(){

  axios.get('https://jsonplaceholder.typicode.com/posts').then(response=>{

  console.log("response",response)
  this.setState({posts:response.data})
  console.log("posts",this.state.posts)
  })

  }
}
