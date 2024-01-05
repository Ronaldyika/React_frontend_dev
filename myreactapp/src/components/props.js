import React from "react";

const Greet=(props)=>{
    return (
        <div>
            <h2>Greetings {props.name} alias {props.value} </h2>
            <p>{props.children}</p>
        </div>
    );
}


export default Greet