import React from "react";

export default class UserItem extends React.Component{
    constructor(props){
        super(props);

        this.state ={
            fullname : props.fullname,
            email : props.email,
            phone : props.phone,
            
        }
    }




    render(){
        return(
            <div>
                <h1>{ this.state.fullname }</h1>
                <p><small>{ this.state.email }</small>  /  <small> {this.state.phone} </small> </p>
            </div>
        );
    }
}