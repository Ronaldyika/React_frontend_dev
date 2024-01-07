import React,{Component} from 'react'

class Counter extends Component{

    constructor(){
        super()
        this.state ={
            count:0
        };
    }
    counter =()=>{
        this.setState({
            count:this.state.count + 1
        })
    }
    render(){
        return(
            <div className='countItems'>
                <h2>count-{ this.state.count }</h2>
                <button onClick={()=>this.counter()}>Increment</button>
            </div>
        )
    }
}


export default Counter