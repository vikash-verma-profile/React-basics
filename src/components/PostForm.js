import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: '',
            title: '',
        }
    }
    changeHandler=e=>{
        this.setState({[e.target.name]:e.target.value})
    }
    submitHandler=e=>{
        e.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state).then(response => {
            console.log(response)
        })
    }

    render() {
        const { userId,title } = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input placeholder="userId" type="text" name="userId" value={userId} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <input placeholder="title" type="text" name="title" value={title} onChange={this.changeHandler} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
export default PostForm