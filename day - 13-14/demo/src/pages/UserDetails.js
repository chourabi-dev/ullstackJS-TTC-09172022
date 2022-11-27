import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../componenets/Navbar";

export default class UserDetailsPage extends React.Component{
    constructor(props){
        super(props);

        console.log(props);

        this.state = {
           id: props.match.params.id
        }
    }


    render(){
        return(
            <div>
                <Navbar />
                <h1>USER N° { this.state.id } </h1>
 
            </div>
        );
    }
}