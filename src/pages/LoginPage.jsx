import { useHistory } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

function LoginPage(props) {
  //   const history = useHistory();

  console.log('props ===', props);
  return (
    <div>
      <h1>Login Page</h1>
      <p>Please login</p>
      <LoginForm></LoginForm>
    </div>
  );
}
export default LoginPage;
