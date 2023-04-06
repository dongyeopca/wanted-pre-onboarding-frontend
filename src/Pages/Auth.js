import React, { useState } from 'react';
import SignUp from '../template/SignUp.js';
import SignIn from '../template/SignIn.js';

function Auth() {
  if (window.location.pathname === '/signup') {
    return <SignUp />;
  }
  return <SignIn />;
}

export default Auth;
