import React ,{ Component} from "react";

class HeaderContent extends Component{
    render(){
        return(
            <div className="NavBar">
                <ul>
                    <a href="">
                        <li>SignIn</li>
                    </a>
                    <a href="">
                        <li>SignUp</li>
                    </a>
                    <a href="">
                        <li>Contact</li>
                    </a>
                </ul>

            </div>
        );
    }
}

export default HeaderContent