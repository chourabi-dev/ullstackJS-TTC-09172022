import React from "react";
import { Link } from "react-router-dom";


export default class SignupPage extends React.Component{
    constructor(props){
        super(props);


        this.state = {
            username: '',
            password: '',
            fullname: '',
            

            errorMessage : '',
            successMessage : '',
            
        }
    }



    createAccount(){






        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({"fullname":this.state.fullname ,"username":this.state.username,"password":this.state.password});

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch("http://localhost:8080/api/auth/create-account", requestOptions)
          .then(response => response.json())
          .then(result =>{
            if (result.success === true) {
               
                this.setState({ successMessage: result.message })

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
                                    <h3>Create account</h3>
                                    <form onSubmit={ (e)=>{e.preventDefault();  this.createAccount()} } >
                                        
                                        <div className="mb-4">
                                            <label>fullname</label>
                                            <input type={ "text" } className={ this.state.fullname==='' ? 'form-control is-invalid ': 'form-control is-valid' } onChange={ (e)=>{this.setState({fullname:e.target.value})} }  value={ this.state.fullname }  />
                                        </div>
                                        
                                        <div className="mb-4">
                                            <label>username</label>
                                            <input type={ "text" } className={ this.state.username==='' ? 'form-control is-invalid ': 'form-control is-valid' } onChange={ (e)=>{this.setState({username:e.target.value})} }  value={ this.state.username }  />
                                        </div>
                                        
                                        <div className="mb-4">
                                            <label>password</label>
                                            <input type={ "password" } className={ this.state.password==='' ? 'form-control is-invalid ': 'form-control is-valid' } onChange={ (e)=>{this.setState({password:e.target.value})} }  value={ this.state.password }  />
                                        </div>
                                        <div className="mb-4">
                                           <button type="submit" className="btn btn-primary">Create account</button> <Link to="/auth" type="submit" className="btn btn-outline-primary">back to singin</Link>
                                        </div>
                                        
                                        <div className="mb-4">
                                           {
                                            this.state.errorMessage !==  '' ?
                                            <div className="alert alert-danger">{ this.state.errorMessage }</div>
                                            :
                                            null
                                           }
                                        </div>
                                        <div className="mb-4">
                                           {
                                            this.state.successMessage !==  '' ?
                                            <div className="alert alert-success">{ this.state.successMessage }</div>
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