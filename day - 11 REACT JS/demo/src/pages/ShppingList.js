import React from "react";

export default class ShoppingList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            valInput : '',

            products : []
        }
    }


   

    render(){
        return(
            <div>

                <div>
                <ol className="list-group list-group-numbered">
                   

                    {
                        this.state.products.map(( p,index )=>{
                            return <li key={ index } className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                <div className="fw-bold">{ p.name }</div>
                                {p.createdAt.getFullYear()} / {p.createdAt.getMonth() + 1} / {p.createdAt.getDate()}
                                </div>
                            
                            
                                <button className="btn btn-sm btn-danger" onClick={ ()=>{
                                    console.log("remove index =>", index);

                                    let tmp = this.state.products;

                                    tmp.splice(index,1);

                                    this.setState({ products: tmp })

                                } } >remove</button>
                            </li>
                        })
                    }
                     
                    </ol>
                </div>


                <div className="d-flex">
                    <div>
                        <input type="text" value={ this.state.valInput } placeholder="Typein you product name" className="form-control" onChange={ (event)=>{ 
                            this.setState({ valInput: event.target.value })  ;

                         

                             

                            
                            } } />
                    </div>
                    <div>
                        <button disabled={this.state.valInput === '' } type="button" className="btn btn-success"  onClick={ ()=>{



                               //insert !!!!

                               let tmp = this.state.products;

                               tmp.push( { name:this.state.valInput, createdAt: new Date()  } );


                               this.setState({ valInput: '', products: tmp })



                        } }  >Ajouter</button>
                    </div>
                </div>
            </div>
        );
    }
}