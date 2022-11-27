import React from "react"; 
export default class Form2Page extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            EmailIsTouched: false,
            emailValue:'tchourabi@gmail.com',

            countries: [
                { id:'TN' , name:'Tunisia' },
                { id:'USA' , name:'United state' },
                { id:'UK' , name:'United kingdom' } 
            ],

            country : 'USA',



            products:[
                { id:12, name:'Samsung s4' },
                { id:13, name:'Iphone 14' },
                { id:14, name:'SHP laptop' },
                { id:15, name:'Macbook air' },
                
            ],

            choosedProducts : []
        }
    }



    validateForm(){
        console.log(this.state);
    }


    render(){
        return(
            <div className="container mt-5">

                    <form  onSubmit={ (event)=>{
                        event.preventDefault();

                        this.validateForm();

                    } }>


                    { /* onchange onfocus set default value  select option state */ }



                    <div className="form-group">
                        <label htmlFor="">Email</label>
                        <input type="email" 
                        value={ this.state.emailValue }
                        className=
                        { ( this.state.EmailIsTouched === true  ) ? ( this.state.emailValue==='' ? 'form-control is-invalid': 'form-control is-valid' ) : 'form-control' } 
                        
                        onFocus={ ()=>{
                          this.setState(
                            { EmailIsTouched: true }
                          );
                        } }


                        onChange={ (event)=>{
                            this.setState({ emailValue : event.target.value })
                        } }
                        
                        />
                       
                       {
                         this.state.EmailIsTouched === true && this.state.emailValue === '' ?
                         <p>
                            <small className="text-danger">this feild is required</small>
                        </p>
                        :
                        null
                        
                       }


                    </div>




                    <div className="form-group">
                        <label htmlFor="">Countries</label>
                        <select  className="form-control" 
                        
                        onChange={ (event)=>{
                            this.setState({
                                country: event.target.value
                            })
                        } }

                        > 
                            <option value="">please select a country</option>
                            {
                                this.state.countries.map((c)=>{
                                   if (c.id === this.state.country) {
                                    return <option selected key={ c.id } value={c.id} >{c.name}</option>;
                                   } else {
                                    return <option  key={ c.id } value={c.id} >{c.name}</option>;
                                   }
                                })
                            }
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Choose products</label>

                        <ul>
                            {
                                this.state.products.map((p)=>{
                                    return <li key={p.id}>


                                    <label htmlFor={ 'p-'+p.id } >{ p.name }</label> 
                                    <input id={ 'p-'+p.id } type="checkbox"   onChange={ (event)=>{ 

                                        console.log(p);

                                        let tmp = this.state.choosedProducts;
                                        

                                        // check if product already exist !!! 
                                        if (event.target.checked === true) {
                                            tmp.push(p)
                                        }else{

                                            for (let i = 0; i < tmp.length; i++) {
                                                const element = tmp[i];
                                                
                                                if (element.id === p.id) {
                                                    tmp.splice(i,1)
                                                }
                                            }
                                        }

 
                                        this.setState({
                                            choosedProducts :  tmp
                                        }) 

                                     } }     />
                                </li>;


                                })
                            }
                        </ul>
                    </div>

                   
                   
                    <div className="form-group mt-3">
                       <button     className="btn btn-primary" type="submit">Validate</button>
                    </div>
                    

                </form>
                
            </div>
        );
    }
}