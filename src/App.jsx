import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import UserOnlyPage from './pages/UserOnlyPage';
import { useState } from 'react';
import AuthContext from './store/AuthContext';
import NotAuthorisedPage from './pages/NotAuthorisedPage';
import { sendData, store } from './helper';

function App() {
  //paziuret ar local storage yra token
  const localToken = localStorage.getItem('token123');
  const localEmail = localStorage.getItem('email123');

  const [tokenValue, setTokenValue] = useState(localToken || '');

  const history = useHistory();
  const [userEmail, setUserEmail] = useState(localEmail || '');

  console.log('tokenValue ===', tokenValue);
  // const isUserLoggedIn = !!userEmail;
  const isUserLoggedIn = !!tokenValue;

  const handleLogin = async (newLoginObj) => {
    const loginResultObj = await sendData(newLoginObj);
    console.log('loginResultObj ===', loginResultObj);

    // if login success we redirect to userOnly page
    if (loginResultObj.token) {
      //login success
      console.log('login success');

      setUserEmail(newLoginObj.email);

      setTokenValue(loginResultObj.token);

      //issaugom token i localstorage
      localStorage.setItem('token123', loginResultObj.token);
      localStorage.setItem('email123', newLoginObj.email);

      history.push('/user-page');
    } else {
      //login fail
      console.log('login fail', loginResultObj.error);
    }
  };

  const handleLogout = () => {
    console.log('handle logout ivykdyta');
    setUserEmail('');
    setTokenValue('');
    localStorage.removeItem('token123');
    localStorage.removeItem('email123');
    history.push('/login');
  };

  const contextValue = {
    userEmail: userEmail,
    isUserLoggedIn: isUserLoggedIn,
    logout: handleLogout,
    login: handleLogin,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      <div className='App'>
        <Header />
        <Switch>
          <Route path={'/user-page'}>
            {isUserLoggedIn ? (
              <UserOnlyPage />
            ) : (
              <Redirect to='/not-authorised' />
            )}
          </Route>
          <Route path={'/not-authorised'}>
            <NotAuthorisedPage />
          </Route>
          <Route path={'/login'}>
            <LoginPage />
          </Route>
          <Route path={'/'}>
            <HomePage />
          </Route>
          <Route path={'/home'}>
            <Redirect to='/' />
          </Route>
        </Switch>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
