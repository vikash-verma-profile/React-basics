import React,{Component} from 'react'
 
class Message extends Component{
    constructor()
    {
        super()
        this.state={
            message:'Welcome Vikash'
        }
       
    }
    ChangeMessage()
    {
        this.setState({
            message:'Thank you for subscribing'
        })
    }
    render(){
        return(
            <div>
             <h1> {this.state.message}</h1>
             <button onClick={ ()=>this.ChangeMessage()} >Subscribe </button>
             </div>
        )
       
    }
}

export default Message