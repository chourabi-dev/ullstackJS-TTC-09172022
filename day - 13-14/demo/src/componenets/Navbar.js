import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <div>
            <nav>
                <Link to="/home" >Home</Link>
                <Link to="/about" >About</Link>
                
            </nav>
        </div>
    );
}