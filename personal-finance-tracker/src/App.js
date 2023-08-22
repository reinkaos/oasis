import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Personal Finance Tracker</h1>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" required />
          </div>
          <button type="submit">Log In</button>
        </form>
        <p>Don't have an account? <a href="#">Register here</a></p>
      </div>
    </div>
  );
}

export default App;
