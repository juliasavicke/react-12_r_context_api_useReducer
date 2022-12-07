import { useContext } from 'react';
import AuthContext from '../store/AuthContext';

function LogoutAction(props) {
  const ctx = useContext(AuthContext);
  console.log('ctx ===', ctx);
  const logoutTrigger = () => {
    // ivykdyti funkcija esancia App.jsx
    // props.onLogout();
    ctx.logout();
  };
  return <button onClick={logoutTrigger}>Logout</button>;
}
export default LogoutAction;
