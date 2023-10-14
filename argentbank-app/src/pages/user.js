import React, { useState, useEffect } from "react";
import "../App.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

export default function Users() {
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);

  // Utilisez Redux pour définir le token (utilisez ceci si vous avez un mécanisme pour définir le token après la connexion)
  // const setTokenInRedux = (token) => {
  //   store.dispatch(setAuthToken(token));
  // };

  useEffect(() => {
    // Si le token n'est pas trouvé dans Redux, redirigez vers /signin
    if (!token) {
      navigate('/signin');
    }
  }, [token, navigate]);

  const [isCollapsibleOpen, setIsCollapsibleOpen] = useState(false);
  const [collapsibleStates, setCollapsibleStates] = useState([
    false, // Pour la première collapsible
    false, // Pour la deuxième collapsible
    false, // Pour la troisième collapsible
  ]);

  // Je véririfer si il y a un TokenExpiredError, si non rediretction login ou home

  const toggleCollapsible = () => {
    setIsCollapsibleOpen(!isCollapsibleOpen);
  };

  const closeCollapsible = () => {
    setIsCollapsibleOpen(false);
  };

  // Fonction pour gérer l'état de chaque collapsible par index
  const toggleTransactionCollapsible = (index) => {
    const newCollapsibleStates = [...collapsibleStates];
    newCollapsibleStates[index] = !newCollapsibleStates[index];
    setCollapsibleStates(newCollapsibleStates);
  };
  return (
    <div>
      <main className="mainContainer">
        <div className="header">
          <h1>
            Welcome back
            <br />
            Tony Jarvis!
          </h1>
          {/* Formulaire */}
          <button className="edit-button" onClick={toggleCollapsible}>
            Edit Name
          </button>
        </div>
        {isCollapsibleOpen && (
          <div className="collapsible-content">
            <form className="edit-user">
              <h2>Edit user infos</h2>
              <div className="form-group">
                <label htmlFor="userName">User Name :</label>
                <input type="text" id="userName" name="userName" />
              </div>
              <div className="form-group">
                <label htmlFor="firstName">First Name :</label>
                <input type="text" id="firstName" name="firstName" />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name :</label>
                <input type="text" id="lastName" name="lastName" />
              </div>
              <div className="button-group">
                <button className="save-button">Save</button>
                <button className="cancel-button" onClick={closeCollapsible}>Cancel</button>
              </div>
            </form>
          </div>
        )}
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082,000.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button" onClick={() => toggleTransactionCollapsible(0)}>View transactions</button>
          </div>
        </section>
        {collapsibleStates[0] && (
              <div className="transaction-collapsible">
                Contenu de la première collapsible
              </div>
            )}
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button" onClick={() => toggleTransactionCollapsible(1)}>View transactions</button>
          </div>
        </section>
        {collapsibleStates[1] && (
              <div className="transaction-collapsible">
                Contenu de la deuxième collapsible
              </div>
            )}
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184,000.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button" onClick={() => toggleTransactionCollapsible(2)}>View transactions</button>
          </div>
        </section>
        {collapsibleStates[2] && (
              <div className="transaction-collapsible">
                Contenu de la troisième collapsible
              </div>
            )}
      </main>
    </div>
  );
}



