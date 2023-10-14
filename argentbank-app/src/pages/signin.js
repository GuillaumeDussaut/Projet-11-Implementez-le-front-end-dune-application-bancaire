import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAuthToken } from '../redux/actions';
import { callApiLogin } from '../callAPI/callAPI'; // Import callApiLogin
import { useNavigate } from 'react-router-dom';

export default function Signin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const authToken = await callApiLogin(email, password); 
      dispatch(setAuthToken(authToken));
      navigate('/user');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleLogin}>
            <div className="input-wrapper">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-remember">
              <input
                type="checkbox"
                id="remember-me"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className="sign-in-button" type="submit">Sign In</button>
          </form>
          {error && <p className="errorMsg">{error}</p>}
        </section>
      </div>
    </>
  );
}








