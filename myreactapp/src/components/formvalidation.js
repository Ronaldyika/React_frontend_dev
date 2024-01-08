import React,{Component} from 'react'


class FormValidation extends Component{
    constructor(props){
        super(props)
        this.state=({
            username:''
        })
    }
    changeHandler=(event)=>{
        this.setState({
            username:event.target.value
        })
    }

    
    render(){

        return(
            <div>
                <form>
                    <label>user name</label>
                    <input placeholder='enter user name' type='text' value={this.state.username} onChange={this.changeHandler}/>
                </form>
            </div>
        )
    }
}

export default FormValidation