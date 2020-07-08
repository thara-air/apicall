import React, { Component } from 'react'
import axios from 'axios'

 class PostList extends Component {
     constructor(props){
         super(props)
         this.state={
             posts:[],
             errMsg:''
         }
     }
     componentWillMount(){
         axios.get('https://jsonplaceholder.typicode.com/posts')
         .then(response => {
             console.log(response)
             this.setState({posts: response.data})
         } )
         .catch(error => {
             console.log(error)
             this.setState({errMsg: 'Error retreving data'})
         }
            )
     }
    render(){
        const { posts,errMsg } = this.state
        return (
            <div >
List of posts
{
    posts.length ?
posts.map(post => <div key={post.id}>{post.id} - {post.title}</div>):
null
}
{errMsg ? <div>{errMsg} </div>:null
}
            </div>
        )
    }
}

export default PostList