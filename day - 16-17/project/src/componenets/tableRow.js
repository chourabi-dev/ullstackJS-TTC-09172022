import React from "react";

export default class TableRow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            index: props.index,
            name:props.name,
            price:props.price,
            relaseYear:props.relaseYear,
            quantity:props.quantity,
            id:props.id,


            isUpdating: false
            
        }
    }

    save(){

        var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", localStorage.getItem("token"));

var raw = JSON.stringify({"title":this.state.name,"price":this.state.price,"quantity":this.state.quantity,"id":this.state.id});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:8080/api/products", requestOptions)
  .then(response => response.text())
  .then(result => {
    this.setState({isUpdating: ! this.state.isUpdating})
  })
  .catch(error => console.log('error', error));

    }


    render(){
        return(
            <tr>
                <td>{ (this.state.index + 1)}</td>
                <td>
                    { 
                        this.state.isUpdating === true ?
                        <input className="form-control" onChange={ (e)=>{ this.setState({ name: e.target.value })  } }  value={ this.state.name } />:

                        <p>{ this.state.name }</p>
                    }

                </td>
                <td>
                
                { 
                        this.state.isUpdating === true ?
                        <input className="form-control" onChange={ (e)=>{ this.setState({ price: e.target.value })  } }  value={ this.state.price } />:

                        <p>{ this.state.price }</p>
                    }

                </td>
                <td>
                                
                { 
                        this.state.isUpdating === true ?
                        <input className="form-control" onChange={ (e)=>{ this.setState({ relaseYear: e.target.value })  } }  value={ this.state.relaseYear } />:

                        <p>{ this.state.relaseYear }</p>
                    }
                </td>
                <td> 

                { 
                        this.state.isUpdating === true ?
                        <input className="form-control" onChange={ (e)=>{ this.setState({ quantity: e.target.value })  } }  value={ this.state.quantity } />:

                        <p>{ this.state.quantity }</p>
                    }
                </td>
                <td>
                   {
                    this.state.isUpdating === false ?
                    <div>
                         <button className="btn btn-sm btn-primary"   onClick={()=>{
                        this.setState({ isUpdating: ! this.state.isUpdating })
                    }}  > edit</button>
                    <button className="btn btn-sm btn-danger" onClick={ ()=>{

                       

                    } } >delete</button>

                    </div>:

                    <div>
                        <button className="btn btn-success" onClick={ ()=>{ this.save() } }>save</button>
                    </div>
                   }
                </td>
                
            </tr>
        );
    }
}