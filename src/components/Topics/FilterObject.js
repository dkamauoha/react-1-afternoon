import React, { Component } from 'react';



export default class FilterObject extends Component {
    constructor () {
        super();
        this.state = {
            unFilteredArray: [
                {
                    name: 'Joe',
                    age: 23,
                    weight: 100
                }, 
                {
                    name: 'Tom',
                    age: 25,
                    hobby: 'Sleeping'
                },
                {
                    name: 'Jen',
                    weight: 100,
                    hobby: 'Resting'
                }],
            userInput: '',
            filteredArray: []

        }
    }

    handlesChange (val) {this.setState({userInput: val})}

    filterArray (prop) {
        let arr = this.state.unFilteredArray;
        let newArr = [];

        for (let i = 0; i < arr.length; i++) {
            if(arr[i].hasOwnProperty(prop)) {
                newArr.push(arr[i])
                
            }
        }

        this.setState({filteredArray: newArr})
    }

    render() {
        return (
        <div className="puzzleBox filterObjectPB">
            <h4> Filter Object </h4>
            <span className="puzzleText"> Original: { JSON.stringify(this.state.unFilteredArray, null, 10) } </span>
            <input className="inputLine" onChange={ (e) => this.handlesChange(e.target.value) }></input>
            <button className="confirmationButton" onClick={ () => this.filterArray(this.state.userInput) }> Filter </button>
            <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredArray, null, 10) } </span>
        </div>
    )
  }
}
