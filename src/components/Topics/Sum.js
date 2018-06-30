import React, { Component } from 'react';



export default class Sum extends Component {
    constructor () {
        super()
        this.state = {
            num1: 0,
            num2: 0,
            sum: null
        }
    }

    updateNum1 (val) {this.setState({num1: val})}

    updateNum2 (val) {this.setState({num2: val})}

    addUp (userNum1, userNum2) {
        let num1 = parseInt(userNum1);
        let num2 = parseInt(userNum2);
        this.setState({sum: num1 + num2})
    }

    render () {
        return (
            <div className='puzzleBox sumPB'>
                <h4>Sum</h4>
                <input className ='inputLine' onChange={(e) => this.updateNum1(e.target.value)}></input>
                <input className ='inputLine' onChange={(e) => this.updateNum2(e.target.value)}></input>
                <button className ='confirmationButton' onClick={() => this.addUp(this.state.num1, this.state.num2)}>Calculate</button>
                <span className='resultsBox'>Sum: {this.state.sum}</span>
            </div>
        )
    }
}