import React, { useState, useEffect } from "react";
import "../App.scss";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import {callApiGetUserData, callApiUpdateUserName} from '../callAPI/callAPI';
import { setUserName, setFirstName, setLastName } from '../redux/actions';


export default function Users() {
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);
  const firstName = useSelector((state) => state.firstName); 
  const lastName = useSelector((state) => state.lastName);
  const userName = useSelector((state) => state.userName);
  const [newUserName, setNewUserName] = useState(userName);


  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) {
      navigate('/signin');
    } else {
      callApiGetUserData(token)
        .then((userProfile) => {
          dispatch(setUserName(userProfile.userName));
          dispatch(setFirstName(userProfile.firstName));
          dispatch(setLastName(userProfile.lastName));
        })
        .catch((error) => {
          console.error('Échec de la récupération des données de l\'utilisateur :', error);
        });
    }
  }, [token, navigate, dispatch]);

  const [isCollapsibleOpen, setIsCollapsibleOpen] = useState(false);
  const [collapsibleStates, setCollapsibleStates] = useState([
    false, // Pour la première collapsible
    false, // Pour la deuxième collapsible
    false, // Pour la troisième collapsible
  ]);

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
  const saveUserName = () => {
    if (newUserName.trim() === '') {
      return;
    }
  
    callApiUpdateUserName(token, newUserName)
      .then((updatedData) => {
      })
      .catch((error) => {
        console.error('Échec de la mise à jour du nom d\'utilisateur :', error);
        // Gérer les erreurs en conséquence
      });
  };
  
  return (
    <div>
      <main className="mainContainer">
        <div className="header">
          <h1>
            Welcome back 
            <br />
            {firstName} {lastName}
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
                <input
                  type="text"
                  id="userName"
                  name="userName"
                  placeholder={userName}
                  value={newUserName}
                  onChange={(e) => setNewUserName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="firstName">First Name :</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder={firstName}
                  disabled 
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name :</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder={lastName}
                  disabled // Désactiver le champ
                />
              </div>
              <div className="button-group">
                <button className="save-button" onClick={saveUserName}>Save</button>
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
                <div className="transaction-title">
                  <p>Date</p>
                  <p>Description</p>
                  <p>Amount</p>
                  <p>Balance</p>
                </div>
                <div className="transaction"></div>
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
              <div className="transaction-title">
                <p>Date</p>
                <p>Description</p>
                <p>Amount</p>
                <p>Balance</p>
              </div>
              <div className="transaction"></div>
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
              <div className="transaction-title">
                <p>Date</p>
                <p>Description</p>
                <p>Amount</p>
                <p>Balance</p>
              </div>
              <div className="transaction"></div>
            </div>
            )}
      </main>
    </div>
  );
}



