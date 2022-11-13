import React from "react";
import Parent from "./componenets/Parent";
import UserItem from "./componenets/UserItem";
import BlocIntro from "./pages-elements/BlocIntro";
import FormsPage from "./pages/Forms";
import Form2Page from "./pages/Forms2";
import HomePage from "./pages/home";
import ShoppingList from "./pages/ShppingList";

export default class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            users:[
                { id: 1, fullname:'chourabi taher', email:'tchourabi@gmail.com', phone:'93863732' },
                { id: 2, fullname:'chourabi taher1', email:'tchourabi@gmail.com', phone:'93863732' },
                { id: 3, fullname:'chourabi taher2', email:'tchourabi@gmail.com', phone:'93863732' },
                { id: 4, fullname:'chourabi taher3', email:'tchourabi@gmail.com', phone:'93863732' },
                { id: 5, fullname:'chourabi taher4', email:'tchourabi@gmail.com', phone:'93863732' },
                
            ],


        }
    }




    render(){
        return(
            <div>
                { /*<h3>Users List:</h3> */ }
                {
                /*this.state.users.map((user)=>{ 
                       return   <UserItem key={ user.id } email={ user.email } phone={ user.phone } fullname={ user.fullname }   />
                    }
                    
                    ) */
                }



               { /*  <Parent /> */ }



               { /* <HomePage /> */ }



               <ShoppingList />

               


            </div>
        );
    }
}