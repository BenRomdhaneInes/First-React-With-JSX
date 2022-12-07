import React, { useState } from 'react'
const Form = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  return(
    <div>
      <form>
        <div className="form-item">
          <label for="first-name">First Name</label>
          <input type="text" id="first-name" className="form-control" onChange={(e) => setFirstName(e.target.value)} value={firstName}/>
        </div>
        <div className="form-item">
          <label for="last-name">Last Name</label>
          <input type="text" id="last-name" className="form-control" onChange={(e) => setLastName(e.target.value)} value={lastName}/>
        </div>
        <div className="form-item">
          <label for="email">Email</label>
          <input type="text" id="email" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email}/>
        </div>
        <div className="form-item">
          <label for="password">Password</label>
          <input type="text" id="password" className="form-control" onChange={(e) => setPassword(e.target.value)} value={password}/>
        </div>
        <div className="form-item">
          <label for="confirm-password">Password</label>
          <input type="text" id="confirm-password" className="form-control" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}/>
        </div>
      </form>

      <h2>Your form data</h2>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
      <p>Confirm Password: {confirmPassword}</p>
    </div>
  )
}

export default Form