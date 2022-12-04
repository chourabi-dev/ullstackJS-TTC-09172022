import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Counter from "./componenets/DemoHook";
import CreateProduct from "./pages/CreateProductPage";
import HomePage from "./pages/HomePage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";


class App extends React.Component {
  constructor(props){
    super(props);
  }


  componentDidMount(){
    
  }



  render(){
    return (
      <div >
        <Counter />

        {
          /**
           * <Router>
          <Switch>
            <Route path={ '/' } component={ HomePage } exact />
            <Route path={ '/auth' } component={ SigninPage } exact />
            <Route path={ '/create-account' } component={ SignupPage } exact />
            <Route path={ '/create-product' } component={ CreateProduct } exact />
            
            
          </Switch>
        </Router>
           */
        }
      </div>
    );
  }
  
}

export default App;
