import React from 'react';

function Email(props) {
  const { setEmail } = props;
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  return (
    <>
      <label htmlFor="email">이메일</label>
      <input data-testid="email-input" id="email" onChange={onChangeEmail} />
    </>
  );
}

export default Email;
