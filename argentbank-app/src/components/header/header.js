import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'; 
import { setAuthToken } from '../../redux/actions';
import logo from '../../assets/argentBankLogo.png';
import { useNavigate } from 'react-router-dom';
import './header.scss';

export default function Header() {
  const dispatch = useDispatch();
  const authToken = useSelector((state) => state.token); // état de connexion depuis Redux
  const navigate = useNavigate();


  const handleSignOut = () => {
    // Déconnecter l'utilisateur en supprimant le token de Redux
    // redirection vers la page d'accueil
    dispatch(setAuthToken(null));
    navigate('/');
  };

  return (
    <header>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div className="signinContainer">
          {authToken ? ( // Si un token est présent, l'utilisateur est connecté
            <>
              <span className="user-name">Nom de l'utilisateur</span>
              <i className="fa fa-user-circle sign-in-icon connecté"></i>
              <Link className="main-nav-item" to="/user">
              <i className="fa-solid fa-gear connecté"></i>
              </Link>
              <i className="fa-solid fa-power-off connecté" onClick={handleSignOut}></i>
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



