import { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import AuthContext from '../store/AuthContext';
function Header(props) {
  const ctx = useContext(AuthContext);
  const isUserLoggedIn = ctx.isUserLoggedIn;
  const userEmail = ctx.userEmail;
  const logoutTrigger = () => {
    // ivykdyti funkcija esancia App.jsx
    // props.onLogout();
    ctx.logout();
  };
  return (
    <header className='main-header'>
      <nav>
        <NavLink className='nav-link' to='/' exact>
          Home
        </NavLink>
        {isUserLoggedIn && (
          <NavLink className='nav-link' to='/user-page'>
            User Page
          </NavLink>
        )}
        {!isUserLoggedIn && (
          <NavLink className='nav-link' to='/login'>
            Login
          </NavLink>
        )}
        {isUserLoggedIn && (
          <p style={{ marginBottom: 0 }} className='nav-link'>
            {userEmail}
          </p>
        )}
        {isUserLoggedIn && (
          <Link className='nav-link' to={'/logout'}>
            <span onClick={logoutTrigger}>Logout</span>
          </Link>
        )}
        {/* jei useris prisilogines, tai rodom louguot */}
        {/* jei useris prisilogines, tai userio email */}
        {/* jei neprisilogines login */}
      </nav>
    </header>
  );
}
export default Header;
