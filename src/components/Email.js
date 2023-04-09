import React from 'react';

function Email(props) {
  const { setEmail } = props;
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div>
      <label htmlFor="email">이메일</label>
      <input data-testid="email-input" id="email" placeholder="wanted@wanted.com" onChange={onChangeEmail} />
    </div>
  );
}

export default Email;
