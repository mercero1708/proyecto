import React from "react"

class colorBg extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          currentBackgroundColor: null,
          selectedBackgroundColor: null
        };
      }
      static getDerivedStateFromProps(props, state) {
        if (document.body.style.backgroundColor !== state.currentBackgroundColor) {
          document.body.style.backgroundColor = `#${state.selectedBackgroundColor}`;
        }
        return null;
      }
      
      handleChange = e => {
        this.setState({ currentBackgroundColor: e.target.value });
      };
      handleClick = value => () => {
        this.setState({ selectedBackgroundColor: value });
      };
      render() {
        return (
          <div className="App">
            <header className="App-header">
          
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <input onChange={this.handleChange} type="text" />
            <input
              onClick={this.handleClick(this.state.currentBackgroundColor)}
              type="button"
              value="change bg"
            />
          </div>
        );
      }
    }
export default colorBg
 
