import './App.css'
import React, { useState } from 'react'

export default function App() {
  const [isLoginView, setIsLoginView] = useState(true)
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="app">
      <div className="outer-box">
        <div className="inner-box">

          {isLoginView ? (
            <div className="form-container">
              <h2>Sign in with email</h2>

              <div className="input-group">
                <input type="email" placeholder="Enter your email" required />
              </div>

              <div className="input-group">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  required
                />
                <span className="toggle" onClick={() => setShowPassword(p => !p)}>
                  {showPassword ? 'Hide' : 'Show'}
                </span>
              </div>

              <p>
                Don&apos;t have an account?
                <label onClick={() => setIsLoginView(false)}> Sign up</label>
              </p>

              <button>Sign in</button>
            </div>
          ) : (
            <div className="form-container">
              <h2>Register new account</h2>

              <div className="input-group">
                <input type="text" placeholder="First name" />
              </div>

              <div className="input-group">
                <input type="text" placeholder="Last name" />
              </div>

              <div className="input-group">
                <input type="text" placeholder="Phone number" />
              </div>

              <div className="input-group">
                <input type="password" placeholder="Password" />
              </div>

              <p>
                Already have an account?
                <label onClick={() => setIsLoginView(true)}> Sign in</label>
              </p>

              <button>Create account</button>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}