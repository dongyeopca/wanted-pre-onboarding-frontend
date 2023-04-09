import React from 'react';

function Password(props) {
  const { setPassword } = props;
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <>
      <label htmlFor="password">패스워드</label>
      <input type="passwrod" data-testid="password-input" id="password" placeholder="********" onChange={onChangePassword} />
    </>
  );
}

export default Password;
