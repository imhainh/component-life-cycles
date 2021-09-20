import React from 'react'

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countValue: 0
        }
        console.log("Counter constructor");
    }
    componentDidMount() {
        console.log("Counter Did Mount");
    }
    componentDidUpdate(){
        console.log("Counter Did Update");
    }
    componentWillUnmount() {
        console.log("Counter Will Unmount");
    }
    shouldComponentUpdate(nextProps, nextState) {
        if(nextState.countValue === this.state.countValue){
            return false;
        }
        return true;
    }

    onDecreaseClick(event) {
        this.setState({countValue: this.state.countValue - 1});
    }
    onIncreaseClick(event) {
        this.setState({countValue: this.state.countValue + 1});
    }
    render() {
        console.log("Counter Render");
        return (
            <div className="Counter" style={{ margin: "20px" }}>
                <button className="decrease" onClick={(event) => this.onDecreaseClick(event)}> - </button>
                <span style={{ padding: "10px" }}>
                    {this.state.countValue}
                </span>
                <button className="increase" onClick={(event) => this.onIncreaseClick(event)}> + </button>
            </div>
        );
    }
}
export default Counter;