import React, { Component } from 'react';



export default class EvenAndOdd extends Component {
    constructor () {
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    handleInput (val) {
        this.setState({userInput: val})
    }

    assignEvenAndOdds (userInput) {
        var arr = userInput.split(',');
        console.log(arr)
        var evens = [];
        var odds = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i]%2 === 0) {
                console.log(arr[i])
                evens.push( parseInt(arr[i], 10))
            } else {
                odds.push( parseInt(arr[i], 10))
            }
        }
        this.setState({evenArray: evens, oddArray: odds})
    } 
    

    render () {
        return (
            <div className='puzzleBox evenAndOddPB'>
                <h4>Evens and Odds</h4>
                <input className='inputLine' type='text' onChange={(e) => this.handleInput(e.target.value)}></input>
                <button className='confirmationButton' onClick={() => {this.assignEvenAndOdds(this.state.userInput)}}>Split</button>
                <span className='resultsBox'>Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className='resultsBox'>Odds:{JSON.stringify(this.state.oddArray)}</span>
            </div>
             

        )
    }
}