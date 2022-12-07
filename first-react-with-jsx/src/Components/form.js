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
          {firstName.length > 0 && firstName.length < 2 && <p>First Name must be at least 2 characters</p>}
        </div>
        <div className="form-item">
          <label for="last-name">Last Name</label>
          <input type="text" id="last-name" className="form-control" onChange={(e) => setLastName(e.target.value)} value={lastName}/>
          {lastName.length > 0 && lastName.length < 2 && <p>Last Name must be at least 2 characters</p>}
        </div>
        <div className="form-item">
          <label for="email">Email</label>
          <input type="text" id="email" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email}/>
          {email.length > 0 && email.length < 5 && <p>Email must be at least 5 characters</p>}
        </div>
        <div className="form-item">
          <label for="password">Password</label>
          <input type="text" id="password" className="form-control" onChange={(e) => setPassword(e.target.value)} value={password}/>
          {password.length > 0 && password.length < 5 && <p>Password must be at least 8 characters</p>}
        </div>
        <div className="form-item">
          <label for="confirm-password">Password</label>
          <input type="text" id="confirm-password" className="form-control" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}/>
          {(confirmPassword.length < 0 || password !== confirmPassword) && <p>Passwords must match</p>}
        </div>
      </form>
    </div>
  )
}

export default Form