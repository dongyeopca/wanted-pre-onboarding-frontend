import React, { useState } from 'react';
import axios from 'axios';
import Email from '../components/Email.js';
import Password from '../components/Password.js';
import SubmitBtn from '../components/SubmitBtn.js';
import api from '../const/api.js';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: api.signIn.method,
      url: api.signIn.url,
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        email: email,
        password: password,
      },
    })
      .then((response) => {
        localStorage.setItem('token', response.data.access_token);
        navigate('/todo');
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };
  const navigateSignUp = () => {
    navigate('/signup');
  };
  return (
    <>
      <fieldset>
        <legend>
          <h1>😎 로그인</h1>
        </legend>
        <Email setEmail={setEmail} />
        <Password setPassword={setPassword} />
        <SubmitBtn type="로그인" email={email} password={password} eventHandler={handleSubmit} />
        <button id="navigateAuth" onClick={navigateSignUp}>
          회원가입
        </button>
      </fieldset>
    </>
  );
}

export default SignIn;
