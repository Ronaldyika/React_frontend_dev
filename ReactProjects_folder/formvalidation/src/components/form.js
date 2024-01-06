import React,{Component} from "react";

class FormDetail extends Component{

    constructor(){
        super()

        this.state ={
            message:'fill in details'
        }
        



    }

    isValid=()=>{
        this.setState(
            {
            message:'the credentials are valid'
            }
        )

    }
    
    render(){
        return(
            <div className="userForm">
                <h3>User Form</h3>
                <div className="userFormDetail">
                    <div>
                        <h3>
                            {this.state.message}
                        </h3>
                    </div>
                    <div className="userFormName">
                        <label for="username">User Name</label>
                        <input type="text" value = "" placeholder="enter a username"/>
                    </div><hr></hr>
                    <div className="userFormName">
                        <label for="userPassword">User Password</label>
                        <input type="password" value = "" placeholder="enter a min 8 letters"/>
                    </div>

                    <div className="btnArea">
                        <button  className="btnSignIn" onClick={()=>this.isValid()}>SignIn</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default FormDetail