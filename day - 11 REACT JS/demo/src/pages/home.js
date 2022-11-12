import React from "react";
import BlocIntro from "../pages-elements/BlocIntro";
import NavbraElement from "../pages-elements/Navbar";
import UsersBloc from "../pages-elements/UsersBloc";

export default class HomePage extends React.Component{
    constructor(props){
        super(props)
    }




    render(){
        return(
            <div>
                <NavbraElement />

                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12">
                            <BlocIntro />
                        </div>

                        <div className="col-12 mt-5">
                           <UsersBloc />
                        </div>

                        <div className="col-12 mt-5">
                           <UsersBloc />
                        </div>

                        
                    </div>
               </div>


            </div>
        );
    }
}