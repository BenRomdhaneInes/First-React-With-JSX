import React,  { Component } from 'react';
class PersonalCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
        age: this.props.person.age
    };
}
  render() { 
    return (
      <div className="person-card">
        <h3>{this.props.person.lastName}, {this.props.person.firstName}</h3>
        <p>Age: {this.state.age}</p>
        <p>Hair color: {this.props.person.hairColor}</p>
        <button onClick={() => this.setState({age: this.state.age + 1}) }>
          birthday button for {this.props.person.firstName} {this.props.person.lastName} 
        </button>
      </div>
    );
  }
}
export default PersonalCard;