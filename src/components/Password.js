import React from 'react';

function Password(props) {
  const { setPassword } = props;
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <>
      <label for="password">패스워드</label>
      <input data-testid="password-input" id="password" onChange={onChangePassword} />
    </>
  );
}

export default Password;
