import React, { Component } from 'react';
import HighScore from './HighScore';
import './css/Styles.css';
import Calculator from './calculatorComponents/Calculator';

class Application extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            overTen: false
        }
    }

    handleClick = () => {
        this.setState({ count: this.state.count + 1 });
    }

    componentDidUpdate(props, state) { // track state
        if (this.state.count > 10 && this.state.count !== state.count && !this.state.overTen) {
            this.setState({ overTen: true });
        }
        // console.log("Updated from", state, "to", this.state);
    }

    resetCount = (e) => {
        this.setState({
            count: 0,
            overTen: false
        })
    }

    render() {
        let { count } = this.state;


        let name = "Shane";


        return (<div>
            <h1>Hello {name} You clicked the button {count} times</h1>
            <HighScore
                overTen={this.state.overTen}
                onReset={this.resetCount}
            />
            <span>
                <button onClick={(e) => this.handleClick()}>Click Me</button>
            </span>

            <Calculator />
        </div>)
    }

}

export default Application