import React, { useState } from 'react';
import Email from '../components/Email.js';
import Password from '../components/Password.js';
import SubmitBtn from '../components/SubmitBtn.js';
import api from '../const/api.js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: api.signUp.method,
      url: api.signUp.url,
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        email: email,
        password: password,
      },
    })
      .then((response) => {
        navigate('/signin');
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  return (
    <>
      <Email setEmail={setEmail} />
      <Password setPassword={setPassword} />
      <SubmitBtn type="회원가입" email={email} password={password} eventHandler={handleSubmit} />
    </>
  );
}

export default Signup;
