import React, {Component} from "react";

class Message extends Component{
    constructor(){
        super()
        this.state = {
            Message:'good morning vishwals'
        }
    }

    hasGreet = ()=>{
        this.setState ({
            Message:'what is your program today'
        });
    }
    Greet = ()=>{
        this.setState ({
            Message: 'greetings Vishwals'
        })
    }
    render(){
        return(
            <div>
                <h2>the power of usestates</h2>
                <div>
                    <h3>{this.state.Message}</h3>
                </div>
                <button onClick={()=>this.Greet()}>greet</button>
                <button onClick={()=>this.hasGreet()}>click</button>
            </div>
        );
    }
}

export default Message