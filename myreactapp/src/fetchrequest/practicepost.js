import React,{Component} from "react";
import axios from "axios";

class FormSubmit extends Component{
    
    constructor(){
        super()
        this.state=({
            name:'',
            email:'',
            password:''
        })




    }
    changeHandler=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
           
        })
        
    }

    submitHandler=(e)=>{
        e.preventDefault()
        // console.log(this.state)

        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(response =>{
            console.log(response)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    

    render(){
        const {name,email,password} = this.state
        return(
            <div className="formdetails">
                <form onSubmit={this.submitHandler}>
                    <label>Name</label>
                    <br></br>
                    <input type="text" name="name" placeholder="input a valid name " value={name} onChange={this.changeHandler}/><br></br>
                    <br></br>

                    <label>Email</label><br></br>
                    <input type="email" name="email" placeholder="enter a valid email" value={email} onChange={this.changeHandler}/><br></br>

                    <label>password</label><br></br>
                    <input type="password" name="password" placeholder="enter a valid password" value={password} onChange={this.changeHandler}/><br></br>

                    <button type="submit">Submit</button>

                </form>
            </div>
        )
    }
}

export default FormSubmit