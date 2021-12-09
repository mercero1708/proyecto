import React from 'react';
import ReactDOM from 'react-dom';

const green = '#39D1B4';
const yellow = '#FFD712';

export default class Toggle extends React.Component{
  constructor(props){
    super(props);
    this.state = { color: green };
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor(){
    const newColor = this.state.color == green ? yellow : green;
    this.setState({ color: newColor })
  }
  render(){
    return(
      <body style={{background: this.state.color}}>
      <body>Change my color</body>
      
	  <button onClick={this.changeColor}>Click</button>
      </body>
    )
  }
}
ReactDOM.render(<Toggle />, document.getElementById('root'))