import React from "react";
import Child from "./Child";

export default class Parent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            childUnsware: '-- --'
        }

        this.getUnswareFromChild = this.getUnswareFromChild.bind(this)
    }



    getUnswareFromChild(message){
        console.log( message );
        this.setState({
            childUnsware: message
        })
    }



    render(){
        return(
            <div>
                <h3>Hello i'm the parent</h3>

                <p>unsware from child: { this.state.childUnsware }  </p>

                <Child message="hello child"  
                callParent = { this.getUnswareFromChild }  />
            </div>
        );
    }
}