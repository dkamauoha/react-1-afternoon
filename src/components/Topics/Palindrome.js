import React, { Component } from 'react';



export default class Palindrome extends Component {
    constructor () {
        super()
        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    handleChange (val) {this.setState({userInput: val})}

    reverseString (userInput) {
        let str = userInput;
        let newStr = userInput;
        newStr = newStr.split('').reverse().join('')

        if (str === newStr) {
            this.setState({palindrome: 'true'})
        } else {
            this.setState({palindrome: 'false'})
        }
    }

    render () {
        return (
            <div className='puzzleBox palindromePB'>
                <h4>Palindrome</h4>
                <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)}></input>
                <button className='confirmationButton' onClick={() => this.reverseString(this.state.userInput)}>Check</button>
                <span className='resultsBox'> Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
} 