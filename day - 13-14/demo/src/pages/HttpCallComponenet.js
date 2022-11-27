// in this page 
// we will have an httpc call request to server

import React from "react";
import Article from "../componenets/Article";


export default class HttpCallPage extends React.Component{
    constructor(props){
        super(props);


        this.state = {
            data: [],
            errormessage:'',
            isLoading:false
            
        }
    }


    // compoenent lifecyle

    // once the component is visible on the screen
    componentDidMount(){
        this.getArticlesFromServer();
    }

    // compont will leave the screen
    componentWillUnmount(){

    }


    // compnt has some errors !!!
    componentDidCatch(){

    }

    // each time user change the state !!
    componentDidUpdate(){

    }



    getArticlesFromServer(){
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        this.setState({ isLoading:true })

        fetch("https://jsonplaceholder.", requestOptions)
        .then(response => response.json())
        .then(result =>{
            
            console.log(result);

            this.setState({ data: result, isLoading:false })

        }) // ok !!
        .catch(error =>{
            console.log(error);

            this.setState({ isLoading:false , errormessage:'Something went wrong, please try again later' })
        }); // error
        
    }


    render(){
        return(
            <div>

                { /* loading */ }

                {
                    this.state.isLoading === true ?
                        <div className="container mt-5 text-center">
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>

                    </div>
                    :
                    null
                    
                }


                { /* error  */ }

                {
                    this.state.errormessage !== '' ?
                    <div className="container mt-5 text-center">
                        <div className="alert alert-danger">
                            { this.state.errormessage }
                        </div>

                    </div> : null
                    
                }




                { /* data */ }
                

                <div className="container mt-5 ">
                    {
                        this.state.data.map((a)=>{
                            return <Article key={ a.id }   body={ a.body } title={ a.title }   />;

                        })
                    }

                </div>



            </div>
        );
    }
}