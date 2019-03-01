import React, { Component } from 'react';
import './App.css';
import  twit from './twitter_img.png';
//import tweet from './new_tweet_feather.PNG';
class App extends Component {
  constructor(props){
    super(props);
    this.state= {messg:""};
    this.handleClick=this.handleClick.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.handleKeyDown=this.handleKeyDown.bind(this);
  }
  handleChange(event){
    
    this.setState(
      {
      messg:event.target.value
  });
 
}

handleKeyDown(event){
  
    if (event.keyCode === 13) {
     event.preventDefault();
     this.handleClick();
    }
}

  handleClick(){
    let elem=document.createElement("li");
    elem.setAttribute("class","listelem");
    let textnode=document.createTextNode(this.state.messg);
    elem.appendChild(textnode);
    document.getElementById("result").appendChild(elem);

   // document.getElementById("result").append(this.state.messg);

    document.getElementById("txt").value="";
  }
  render() {
    return (
      <div class="App">
        <img id ="logo" src={twit} alt="twitter_logo" /><br/><br/><br/>
        <input type="text" id="txt" placeholder="Tweet here" onChange={this.handleChange} onKeyDown={this.handleKeyDown} />
        <button id="submit" type="submit" onClick={this.handleClick}>Tweet</button><br/>
          <ol id="result">
          </ol>
        <p>
          Tweets are displayed here
        </p>
      </div>
    );
  }
}

export default App;
