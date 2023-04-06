import React, { useEffect } from 'react';
import SignUp from '../template/SignUp.js';
import SignIn from '../template/SignIn.js';
import { useNavigate } from 'react-router-dom';

function Auth() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/todo');
    }
  }, [navigate]);

  if (window.location.pathname === '/signup') {
    return <SignUp />;
  }
  return <SignIn />;
}

export default Auth;
