import React from "react";
import { Link }from 'react-router-dom';
import TableRow from "../componenets/tableRow";

export default class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            products : [],
            search:''
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

        this.getProductsFromServer();
    }



    getProductsFromServer(){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", localStorage.getItem("token") );

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch("http://localhost:8080/api/products", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);

            this.setState({ products: result })
        })
        .catch(error => console.log('error', error));
    }


    deleteProduct(id){
        var myHeaders = new Headers();
        myHeaders.append("Authorization", localStorage.getItem("token") );


        var requestOptions = {
            method: 'DELETE',
            redirect: 'follow',
            headers: myHeaders,
          };
          
          fetch("http://localhost:8080/api/products?id="+id, requestOptions)
            .then(response => response.text())
            .then(result => {
                this.getProductsFromServer();
            })
            .catch(error => console.log('error', error));
    }


    render(){
        return(
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12 search-box mb-3">
                        <label htmlFor="">Search</label>
                        <input onChange={ (e)=>{
                            this.setState({ search : e.target.value })
                        } } type="search" className="form-control" />
                    </div>



                    <div className="col-12">
                        
                        <div className="d-flex justify-content-between">
                        <h3>Products list</h3>

                        <Link className="btn btn-sm btn-outline-primary" to="/create-product">Create new Product</Link>

                        </div>
                        
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Date</th>
                                    <th>Quantity</th>
                                    <th>Actions</th>
                                    
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.products.filter( (p)=> p.name.indexOf(this.state.search) != -1 )   .map((p,index)=>{
                                        return(
                                            <TableRow index={ (index+1) } name={ p.name } price={p.price} quantity={ p.quantity } id={p._id}  relaseYear={ p.relaseYear }  />
                                        );
                                    })
                                }

                            </tbody>
                        </table>
                    </div>




                </div>

            </div>
        );
    }
}