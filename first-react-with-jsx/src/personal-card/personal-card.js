import React,  { Component } from 'react';
class PersonalCard extends Component {
  render() { 
    return (
      <div className="">
        <h3>{this.props.person.lastName}, {this.props.person.firstName}</h3>
        <p>Age: {this.props.person.age}</p>
        <p>Hair color: {this.props.person.hairColor}</p>
      </div>
    );
  }
}
export default PersonalCard;