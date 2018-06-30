import React, { Component } from 'react';



export default class FilterString extends Component {
    constructor () {
        super()
        this.state = {
            unFilteredArray: ['Edwin', 'Karen', 'Dylan', 'Courtney', 'Jordan', 'Ashlyn', 'Piper', 'Ethan', 'Kathleen', 'Daniel'],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange (val) {
        this.setState({userInput: val})
    }

    stringFilter (userInput) {
        let arr = this.state.unFilteredArray.slice();
        let newArr = [];

        for (let i = 0; i < arr.length; i++) {
            if (arr[i].startsWith(userInput)) {
                newArr.push(arr[i])
            }
        }

        this.setState({filteredArray: newArr})
    }

    render () {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className='puzzleText'>Names: {JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
                <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)}></input>
                <button className='confirmationButton' onClick={() => this.stringFilter(this.state.userInput)}>Filter</button>
                <span className='resultsBox filterStringRB'>Filtered Names: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}