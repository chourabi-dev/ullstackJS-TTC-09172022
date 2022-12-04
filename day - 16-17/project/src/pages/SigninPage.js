import React from "react";
import { Link } from "react-router-dom";


export default class SigninPage extends React.Component{
    constructor(props){
        super(props);


        this.state = {
            username: '',
            password: '',

            errorMessage : ''
        }
    }



    auth(){
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({"username":this.state.username,"password":this.state.password});
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch("http://localhost:8080/api/auth/signin", requestOptions)
          .then(response => response.json())
          .then(result =>{
            if (result.success === true) {
                // 1 save the token !!!
                localStorage.setItem("token", result.token);

                // 2 redirct to home page !!
                this.props.history.push("/");


            } else {
                this.setState({ errorMessage: result.message })
            }
          })
          .catch(error => console.log('error', error));
    }



    render(){
        return(
            <div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-5">
                            <div className="card">
                                <div className="card-body">
                                    <h3>Log in !</h3>
                                    <form onSubmit={ (e)=>{e.preventDefault();  this.auth()} } >
                                        <div className="mb-4">
                                            <label>username</label>
                                            <input type={ "text" } className={ this.state.username==='' ? 'form-control is-invalid ': 'form-control is-valid' } onChange={ (e)=>{this.setState({username:e.target.value})} }  value={ this.state.username }  />
                                        </div>
                                        
                                        <div className="mb-4">
                                            <label>password</label>
                                            <input type={ "password" } className={ this.state.password==='' ? 'form-control is-invalid ': 'form-control is-valid' } onChange={ (e)=>{this.setState({password:e.target.value})} }  value={ this.state.password }  />
                                        </div>
                                        <div className="mb-4">
                                           <button type="submit" className="btn btn-primary">Connect</button> <Link to="/create-account" type="submit" className="btn btn-outline-primary">create account</Link>
                                        </div>
                                        
                                        <div className="mb-4">
                                           {
                                            this.state.errorMessage !==  '' ?
                                            <div className="alert alert-danger">{ this.state.errorMessage }</div>
                                            :
                                            null
                                           }
                                        </div>
                                        
                                        
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}