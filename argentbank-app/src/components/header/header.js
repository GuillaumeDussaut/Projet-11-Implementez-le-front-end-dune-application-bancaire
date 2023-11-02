import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setAuthToken, setUserName} from '../../redux/actions';
import logo from '../../assets/argentBankLogo.png';
import { useNavigate } from 'react-router-dom';
import { callApiGetUserData } from '../../callAPI/callAPI';
import './header.scss';

export default function Header() {
  const dispatch = useDispatch();
  const authToken = useSelector((state) => state.token);
  const userName = useSelector((state) => state.userName);
  const navigate = useNavigate();

  useEffect(() => {
    if (authToken) {
      callApiGetUserData(authToken)
        .then((data) => {
          dispatch(setUserName(data.userName)); 
        })
        .catch((error) => {
          
        });
    }
  }, [authToken, dispatch]);

  const handleSignOut = () => {
    dispatch(setAuthToken(null));
    dispatch(setUserName(''));
    navigate('/');
  };

  return (
    <header>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div className="signinContainer">
          {authToken ? (
            <>
              <span className="user-name">{`${userName}`} </span>
              <Link className="main-nav-item" to="/user">
                <i className="fa fa-user-circle sign-in-icon connecté"></i>
              </Link>
              <i className="fa-solid fa-power-off connecté" onClick={handleSignOut}></i>
              <h4 onClick={handleSignOut}>Sign Out</h4>
            </>
          ) : (
            <div className="signinContainer">
              <i className="fa fa-user-circle sign-in-icon"></i>
              <Link className="main-nav-item" to="/signin">
                Sign In
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}






