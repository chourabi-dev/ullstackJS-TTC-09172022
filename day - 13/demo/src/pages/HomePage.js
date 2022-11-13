import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../componenets/Navbar";

export default class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            users: [
                { id:1, name:"chourabi taher 1" },
                { id:2, name:"chourabi taher 2" },
                { id:3, name:"chourabi taher 3" },
                
            ]
        }
    }


    render(){
        return(
            <div>
                <Navbar />
                <h1>Home page</h1>

                <ul>
                    {
                        this.state.users.map( (u)=>{
                            return <li key={ u.id }>
                                <Link to={ '/user/'+u.id } > { u.name } </Link>
                            </li>
                        } )
                    }
                </ul>
            </div>
        );
    }
}