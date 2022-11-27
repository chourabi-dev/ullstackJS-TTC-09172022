import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from "./componenets/Navbar";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import HttpCallPage from "./pages/HttpCallComponenet";
import NotFoundPage from "./pages/NotFoundPage";
import UserDetailsPage from "./pages/UserDetails";

function App() {
  return (
    <div >
       <Router> 
            <Switch>
              <Route path={ '/' } component={ HomePage } exact />
              <Route path={ '/home' }  component={HomePage} exact />
              <Route path={ '/about' }  component={AboutPage} exact />
              <Route path={ '/user/:id' } component={ UserDetailsPage } exact />

              <Route path={ '/articles' } component={ HttpCallPage } exact />

            
              { /* WILD CARD  */ }
              <Route path={ '*' }  component={NotFoundPage}  />
              
              
            </Switch> 

       </Router>
    </div>
  );
}

export default App;
