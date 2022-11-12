import React from "react"; 
export default class FormsPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username:'',
            password:''
        }
    }



    validateForm(){
        console.log("ok");

        console.log(this.state);
    }


    render(){
        return(
            <div className="container mt-5">

                <form  onSubmit={ (event)=>{
                    event.preventDefault();

                    this.validateForm();

                } }>

                    <div className="form-group">
                        <label htmlFor="">Username</label>
                        <input type="text" className= { this.state.username ==='' ?  "form-control is-invalid" : "form-control is-valid"}
                        
                        onChange={ (event)=>{
                            this.setState({
                                username : event.target.value
                            })
                        } }

                        />
                    </div>



                    <div className="form-group mt-3">
                        <label htmlFor="">Password</label>
                        <input type="password" className= { this.state.password ==='' ?  "form-control is-invalid" : "form-control is-valid"}
                        
                        onChange={ (event)=>{
                            this.setState({
                                password : event.target.value
                            })
                        } }
                        
                        />
                    </div>
                    <div className="form-group mt-3">
                       <button  disabled={     this.state.username === '' || this.state.password===''  ? true : false     }   className="btn btn-primary" type="submit">Connect</button>
                    </div>
                    

                </form>
                
            </div>
        );
    }
}