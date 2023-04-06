import React from 'react';

function SubmitBtn(props) {
  const { type, email, password, eventHandler } = props;
  return (
    <button
      data-testid={type === '회원가입' ? 'signup-button' : 'signin-button'}
      disabled={!(email.includes('@') && password.length >= 8)}
      onClick={eventHandler}
    >
      {type}
    </button>
  );
}

export default SubmitBtn;
