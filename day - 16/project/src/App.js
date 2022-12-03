import React from "react";

class App extends React.Component {
  constructor(props){
    super(props);
  }


  testBackend(){
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("http://localhost:8080/api/get-token", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  componentDidMount(){
    this.testBackend();
  }



  render(){
    return (
      <div >
        demo
      </div>
    );
  }
  
}

export default App;
