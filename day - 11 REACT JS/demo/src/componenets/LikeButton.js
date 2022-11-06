import React from "react";

export default class LikeButton extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            likes: props.likes,
            like: props.like
        }
    }


    render(){
 

        return(

            <button
            
            onClick={ ()=>{

                if (this.state.like === false) {
                    this.setState({ likes: (this.state.likes -1) , like: true })
                } else {
                    this.setState({ likes: (this.state.likes +1) , like: false })
                }

            }}
            
            >{this.state.likes} { this.state.like === false ? 'Like' : 'Dislike' }</button>
        );
    }
}