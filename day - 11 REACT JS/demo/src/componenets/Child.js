import React from "react";

export default class Child extends React.Component{
    constructor(props){
        super(props);

        console.log(props);

        this.state = {
            message: props.message,
            callParent: props.callParent
        }
    }



    render(){
        return(
            <div>
                <h3>Hello i'm the child</h3>
                <p>my parent sais : { this.state.message } </p>

                <button className="btn btn-primary" onClick={ ()=>{
                    this.state.callParent("hello parent")
                } }  >unsware my parent</button>

            </div>
        );
    }
}