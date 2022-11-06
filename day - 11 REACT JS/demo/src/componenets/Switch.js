import React from "react";

export default class SwitchBtn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            clicked : false
        }
    }





    render(){

 


        return(
            <div>
                <h1  
                onDoubleClick={ ()=>{ 
                    this.setState({ clicked : false })
                 } }
                 
                 onClick={ ()=>{ 
                    this.setState({ clicked : true })
                 } }  
                 
                 > { this.state.clicked === false ? 'OFF' : 'ON' } </h1>

            </div>
        );
    }
}
