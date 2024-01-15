import React,{Component} from "react";
import axios from "axios";

class FormSubmit extends Component{
    
    constructor(){
        super()
        this.state=({
            name:'',
            email:'',
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

        axios.post('http://127.0.0.1:8000/book/libarians/',this.state)
        .then(response =>{
            console.log(response)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    

    render(){
        const {name,email} = this.state
        return(
            <div className="formdetails">
                <form onSubmit={this.submitHandler}>
                    <label>Name</label>
                    <br></br>
                    <input type="text" name="name" placeholder="input a valid name " value={name} onChange={this.changeHandler}/><br></br>
                    <br></br>

                    <label>Email</label><br></br>
                    <input type="email" name="email" placeholder="enter a valid email" value={email} onChange={this.changeHandler}/><br></br>

                    <button type="submit">Submit</button>

                </form>
            </div>
        )
    }
}

export default FormSubmit