import React,{Component} from "react";

class Eventhanle extends Component{

    enventhandle(){
        document.write('button clicked')
    }

    render(){
        return(
            <div>
                <button onClick={this.enventhandle}>click me</button>
            </div>
        )
    }
}

export default Eventhanle