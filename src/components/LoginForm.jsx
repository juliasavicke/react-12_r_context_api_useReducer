import { useContext } from 'react';
import { useState } from 'react';
import AuthContext from '../store/AuthContext';

function LoginForm(props) {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const ctx = useContext(AuthContext);

  function emailHandler(e) {
    setEmailValue(e.target.value.trim());
  }
  function passwordHandler(e) {
    setPasswordValue(e.target.value.trim());
  }

  function formHandler(e) {
    e.preventDefault();
    const loginObj = { email: emailValue, password: passwordValue };
    // props.onLogin(loginObj);
    ctx.login(loginObj);
  }
  console.log('props: ', props);

  return (
    <div>
      <h2>Login here</h2>
      <form onSubmit={formHandler} className='card'>
        <input
          type='text'
          placeholder='email'
          value={emailValue}
          onChange={emailHandler}
        />
        <input
          type='password'
          placeholder='password'
          value={passwordValue}
          onChange={passwordHandler}
        />
        <button type='submit'>Login</button>
      </form>
      {!props.showDebug && (
        <>
          <hr /> <h3>Debug values</h3> <p>Email: {emailValue}</p>
          <p>Password: {passwordValue}</p>
        </>
      )}
    </div>
  );
}
export default LoginForm;
