import React,{Component} from "react";

class reactForms extends Component{
    constructor(props){
        super(props)

        this.state=({
            val:"",
            password:""
        })


    }
    changeHandlerName=(event)=>{
        this.setState({
            val:event.target.value
        })
    }

    changeHandlerPassword=(event)=>{
        this.setState({
            password:event.target.value
        })
    }

    display(){
        alert('my name is ',this.changeHandlerName,'and my password is ',this.state.password)
    }


    render(){
        return(
            <div>
                <h1>React component form</h1>

                <form>
                    <label>Name</label>
                    <input type="text" placeholder="enter your name" value={this.state.val} onChange={this.changeHandlerName}/>
                    <label>Password</label>
                    <input type="password" placeholder="enter passord" value={this.state.password} onChange={this.changeHandlerPassword}/>


                    <button type="submit" onClick={()=>{this.display()}}>submit</button>
                </form>
            </div>
        )
    }
}

export default reactForms