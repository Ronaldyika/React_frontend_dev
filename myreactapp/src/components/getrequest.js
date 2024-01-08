import axios from "axios";
import React,{Component} from "react";

class getRequest extends Component{

    constructor(){
        super()

        this.state=({
            data:[]
        })
    }

    componentAdd=()=>{
        axios.get('https://jsonplaceholder.typicod.com/posts  ')
        .then(Response =>{
            
            this.setState({
                data:this.Response.data
            })
        })
    .catch(error =>
        console.log(error))
    }


    render(){
        const {data} = this.data
        return(


            <div>
                {
                                 
                    data.length?
                    data.map(data= <div key = {data.id}>{data.title}</div>):

                    null
                }
            </div>
        )
    }
}

export default getRequest