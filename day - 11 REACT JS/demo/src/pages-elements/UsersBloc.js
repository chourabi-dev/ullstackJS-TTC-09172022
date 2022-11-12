import React from "react";

export default class UsersBloc extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            users:[
                { id: 1, fullname:'chourabi taher', email:'tchourabi@gmail.com', phone:'93863732' },
                { id: 2, fullname:'chourabi taher1', email:'tchourabi@gmail.com', phone:'93863732' },
                { id: 3, fullname:'chourabi taher2', email:'tchourabi@gmail.com', phone:'93863732' },
                
            ]
        }
    }



    render(){
        return(
            <div className="row">
                {
                    this.state.users.map((user)=>{
                        return(
                            <div className="col-sm-4">
                                <div className="card w-100"   >
                                    
                                    <div className="card-body">
                                        <h5 className="card-title">{ user.fullname }</h5>
                                        <p className="card-text">{user.email}</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}