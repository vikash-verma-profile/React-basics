import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        // axios.get('https://jsonplaceholder.typicode.com/posts').then(response=>{
        //     console.log(response)
        //     this.setState({posts: response.data})
        // })
        // axios.put('https://jsonplaceholder.typicode.com/posts/1',JSON.stringify({
        //     id: 1,
        //     title: 'foo',
        //     body: 'bar',
        //     userId: 1
        //   })).then(response => {
        //     console.log(response)
        //     this.setState({ posts: response.data })
        // })
  axios.delete('https://jsonplaceholder.typicode.com/posts/1').then(response => {
            console.log(response)
            this.setState({ posts: response.data })
        })

        
    }
    render() {
        const { posts } = this.state
        return (
            <div>
                List of posts
    {
                    posts.length ?
                        posts.map(post => <div key={post.id}> {post.title} </div>) :
                        null
                }
            </div>

        )
    }
}
export default PostList