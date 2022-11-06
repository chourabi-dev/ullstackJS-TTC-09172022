import React from "react";



export default class Counter extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            counter : 0,
            title:"My counter"
        }
    }

    render(){
        return(
            <div>

                <h1>{ this.state.title }</h1>

                <h3>clicked { this.state.counter } times</h3>

                <button    onClick={ ()=>{
                    console.log("clicked"); 

                    //  NEVER EDIT STATE DIRECTLY !!!!!!!!!!
                    // FALSE   this.state.counter = this.state.counter + 1

                    this.setState(
                        { counter: this.state.counter + 1 }
                    )

                } }    >click</button>

            </div>
        );
    }


}