import LoginForm from '../components/LoginForm';
import { useState } from 'react';

function NotAuthorisedPage(props) {
  const [showForm, setShowForm] = useState(false);
  function toggleShowForm() {
    setShowForm(true);
  }
  return (
    <div>
      <h1>For logged in users only</h1>
      {/* ideti login forma, padaryti kad veiktu su context */}
      <button onClick={toggleShowForm}>Show form</button>
      {showForm === true ? <LoginForm showDebug></LoginForm> : ''}
    </div>
  );
}
export default NotAuthorisedPage;
