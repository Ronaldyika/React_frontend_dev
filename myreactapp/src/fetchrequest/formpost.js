import React,{Component} from 'react'
import axios from 'axios'


class Formpost extends Component{

    constructor(){
        super()

        this.state=(
            {
                userid:'',
                title:'',
                body:''
            }
        )
    }
    changeHandler=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    submitHandler = (e)=>{
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(response =>{
            console.log(response)

        })
        .catch(error=>{
             console.log(error)
        })
    }

    render(){
        const {userid,title,body} = this.state
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type='text' placeholder='enter a user name' name='userid' value={userid} onChange={this.changeHandler}/>
                    <input type='text' placeholder='enter a user name' name='title' value={title} onChange={this.changeHandler}/>
                    <input type='text' placeholder='please enter body' name='body' value={body} onChange={this.changeHandler}/>
                    <button type='submit'>submit</button>
                </form>
            </div>
        )
    }
}

export default Formpost