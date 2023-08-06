import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    rememberMe: false, // Add the remember Me field to the state
  });

  const navigate = useNavigate();

  

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value; // Handle checkbox field separately
    setFormData((prevData) => ({
      ...prevData,
      [name]: fieldValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform registration logic here (e.g., submit data to the server)
    console.log(formData);
    navigate('/PlanDetails');
  };

  return (
    <div className='regcontain'>
      <div className="container">
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          {/* Add Remember Me checkbox */}
          <div className="form-group remember-me" style={{ marginTop: 15, display: 'flex', alignItems: 'center' }}>
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
            />
            <label htmlFor="rememberMe" style={{ marginLeft: 5 }}>Remember Me</label>
          </div>
          <div className="form-group" style={{ textAlign: 'center', marginTop: 25 }}>
            <button type="submit">Login</button>
          </div>
        </form>
        <div className="login-link" style={{ textAlign: 'center', marginTop: 50 }}>
          <p style={{ fontSize: 12 }}>New to MyApp? <a href="/register" style={{ color: 'blue', textDecoration: 'none'}}>SignUp</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;