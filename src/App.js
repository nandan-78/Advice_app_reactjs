import React from 'react'
import axios from 'axios';
import './App.css';

class App extends React.Component{
  state = {advice: ""};

  componentDidMount(){
    this.fetchAdvice();
    
    console.log("componentDidMount.");
  }
  fetchAdvice = () =>{
    axios.get ("https://api.adviceslip.com/advice")
    .then((response)=>{
      //console.log(response.data.slip.advice);
      const {advice}  = response.data.slip;
      this.setState({advice });

    })
    .catch((erorr)=>{
      console.log("error 404");

    })

  }
    
  


  render(){
    const {advice} = this.state ;
    return (
      <div className="app">
        <div className="cards">
          <h1 className="heading">{advice}</h1>
          <button className="button" onClick={this.fetchAdvice}><span>GIVE ME ADVICE !</span>
          </button>
        </div>
      </div>
    )
  }
}

export default App

