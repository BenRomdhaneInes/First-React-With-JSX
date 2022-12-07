import React,  { useState } from 'react';
const PersonalCard = ({person}) => {
  const [age, setAge] = useState(person.age)
    return (
      <div className="person-card">
        <h3>{person.lastName}, {person.firstName}</h3>
        <p>Age: {age}</p>
        <p>Hair color: {person.hairColor}</p>
        <button onClick={() => setAge(age + 1) }>
          birthday button for {person.firstName} {person.lastName} 
        </button>
      </div>
    )
}
export default PersonalCard;