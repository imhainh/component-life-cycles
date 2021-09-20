import React from 'react'

import Counter from './components/Counter';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hideCounter: false,
    }
  }
  componentDidMount() {
    console.log("App Did Mount");
  }
  componentDidUpdate() {
    console.log("App Did Update");
  }
  componentWillUnmount() {
    console.log("App Will Unmount");
  }
  onHideCounterClick(event){
    this.setState({hideCounter: !this.state.hideCounter});
  }
  render() {
    console.log("App Render");
    return (
      <div className="App">
        <button onClick={(event) => this.onHideCounterClick(event)}> Hide/Show Counter</button>
        {!this.state.hideCounter && <Counter />}
      </div>
    );
  }
}

export default App;
