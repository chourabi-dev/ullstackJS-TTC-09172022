export default function Article(props){
    return(
        <div>
            <div className="card w-100 mb-4" >
                <div className="card-body">
                    <h5 className="card-title">{ props.title }</h5>
                    <p className="card-text">{props.body}</p>

                </div>
            </div>

        </div>
    );
}