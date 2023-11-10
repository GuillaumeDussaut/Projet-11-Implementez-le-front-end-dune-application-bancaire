import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { callApiGetUserData, callApiUpdateUserName } from "../callAPI/callAPI";
import { setUserName, setFirstName, setLastName } from "../redux/actions";
import { CollapsibleMain1, CollapsibleMain2, CollapsibleMain3 } from "../content/collapses";

import "../App.scss";

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
      navigate("/signin");
    } else {
      callApiGetUserData(token)
        .then((userProfile) => {
          dispatch(setUserName(userProfile.userName));
          dispatch(setFirstName(userProfile.firstName));
          dispatch(setLastName(userProfile.lastName));
        })
        .catch((error) => {
          console.error("Échec de la récupération des données de l'utilisateur :", error);
        });
    }
  }, [token, navigate, dispatch]);

  const saveUserName = (e) => {
    e.preventDefault()
    if (newUserName.trim() === "") {
      return;
    }
    callApiUpdateUserName(token, newUserName)
      .then((updatedData) => {
        dispatch(setUserName(newUserName));
      })
      .catch((error) => {
        console.error("Échec de la mise à jour du nom d'utilisateur :", error);
      });
  };
// partie collapses
  const [isCollapsibleOpen, setIsCollapsibleOpen] = useState(false);
  const [secondaryCollapsibleOpen, setSecondaryCollapsibleOpen] = useState([false, false, false]);
  const toggleCollapsible = () => {
    setIsCollapsibleOpen(!isCollapsibleOpen);
  };
  const closeCollapsible = (e) => {
    e.preventDefault()
    setIsCollapsibleOpen(false);
  };
  const toggleSecondaryCollapsible = (index) => {
    const newSecondaryCollapsibleOpen = [...secondaryCollapsibleOpen];
    newSecondaryCollapsibleOpen[index] = !newSecondaryCollapsibleOpen[index];
    setSecondaryCollapsibleOpen(newSecondaryCollapsibleOpen);
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
          <button className="edit-button" onClick={toggleCollapsible}>
            Edit Name
          </button>
        </div>
        {isCollapsibleOpen && (
          <div className="collapsible-content">
            <form className="edit-user">
              <h2>Edit user info</h2>
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
                <input type="text" id="firstName" name="firstName" placeholder={firstName} disabled />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name :</label>
                <input type="text" id="lastName" name="lastName" placeholder={lastName} disabled />
              </div>
              <div className="button-group">
                <button className="save-button" onClick={(e) => saveUserName(e)}>
                  Save
                </button>
                <button className="cancel-button" onClick={(e) => closeCollapsible(e)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button" onClick={() => toggleSecondaryCollapsible(0)}>
              View transactions
            </button>
          </div>
        </section>
        {secondaryCollapsibleOpen[0] && (
          <CollapsibleMain1
          onToggleSecondaryCollapsible={() => toggleSecondaryCollapsible(0)}
            isSecondaryOpen={secondaryCollapsibleOpen[0]}
          />
        )}
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button" onClick={() => toggleSecondaryCollapsible(1)}>
              View transactions
            </button>
          </div>
        </section>
        {secondaryCollapsibleOpen[1] && (
          <CollapsibleMain2
            onToggleCollapsible={() => toggleSecondaryCollapsible(1)}
            isSecondaryOpen={secondaryCollapsibleOpen[1]}
          />
        )}
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button" onClick={() => toggleSecondaryCollapsible(2)}>
              View transactions
            </button>
          </div>
        </section>
        {secondaryCollapsibleOpen[2] && (
          <CollapsibleMain3
            onToggleCollapsible={() => toggleSecondaryCollapsible(2)}
            isSecondaryOpen={secondaryCollapsibleOpen[2]}
          />
        )}
      </main>
    </div>
  );
}
