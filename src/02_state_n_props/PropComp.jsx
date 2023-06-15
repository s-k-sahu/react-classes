import React, { Component } from 'react'

export default class PropComp extends Component {
    constructor(props){
        super(props);
        this.state={
            place:'kolkatta',
            noOffaltuTokis:'unlimited'
        }
        console.log(props,'props data...')
    }
  render() {
    const {noOffaltuTokis,place} = this.state
    return (
      <div>
        i am a child component of State component 
        {/* <p>in {this.state.place} there are {this.state.noOffaltuTokis} no of faltu tokis</p> */}
        <p>in {place} there are {noOffaltuTokis} no of faltu tokis</p>
      </div>
    )
  }
}
