import { Link } from "react-router-dom";

export default function NotFoundPage(){
    return(
        <div>
            <h1 style={ { textAlign: "center" } } >404</h1>
            <p style={ { textAlign: "center" } } >Back to <Link to={'/'}>home</Link> page</p>

        </div>
    );
}