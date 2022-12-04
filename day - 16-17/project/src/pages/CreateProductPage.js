import React from "react";
import { Link }from 'react-router-dom';

export default class CreateProduct extends React.Component{
    constructor(props){
        super(props);
        this.state = {

            title: "" ,
            price: "",
            quantity: "",
            category:"",

            errorMessage : '',
            successMessage : '',
           
        }
    }


    checkAuth(){
        const token = localStorage.getItem("token");

        if ( token == null ) {
            // not connected !!
          this.props.history.push("/auth");
        }
    }


    componentDidMount(){
        this.checkAuth();
 
    }



    createProduct(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", localStorage.getItem("token"));
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({"title":this.state.title,"price":this.state.price,"quantity":this.state.quantity,"category":this.state.category});

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://localhost:8080/api/products", requestOptions)
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
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        <h3>Create Product</h3>

                        <form onSubmit={ (e)=>{ e.preventDefault(); this.createProduct() } } >

                        <div className="mb-4">
                            <label>title</label>
                            <input type={ "text" } className={ this.state.title==='' ? 'form-control is-invalid ': 'form-control is-valid' } onChange={ (e)=>{this.setState({title:e.target.value})} }  value={ this.state.title }  />
                        </div>
                        <div className="mb-4">
                            <label>price</label>
                            <input type={ "text" } className={ this.state.price==='' ? 'form-control is-invalid ': 'form-control is-valid' } onChange={ (e)=>{this.setState({price:e.target.value})} }  value={ this.state.price }  />
                        </div>

                        <div className="mb-4">
                            <label>quantity</label>
                            <input type={ "text" } className={ this.state.quantity==='' ? 'form-control is-invalid ': 'form-control is-valid' } onChange={ (e)=>{this.setState({quantity:e.target.value})} }  value={ this.state.quantity }  />
                        </div>

                        <div className="mb-4">
                            <label>category</label>
                            <input type={ "text" } className={ this.state.category==='' ? 'form-control is-invalid ': 'form-control is-valid' } onChange={ (e)=>{this.setState({category:e.target.value})} }  value={ this.state.category }  />
                        </div>

                        <div className="mb-4">
                          <button type="submit" className="btn btn-success">Create product</button>
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
        );
    }
}