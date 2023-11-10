import React, { useState } from "react";
import "../App.scss";

export const CollapsibleMain1 = () => {
    const [isSecondaryOpen, setIsSecondaryOpen] = useState(false); 
  
    return (
      <div className="transaction-collapsible">
        <div className="transaction-title">
          <p>Date</p>
          <p>Description</p>
          <p>Amount</p>
          <p>Balance</p>
        </div>
        <div className="transaction">
          <p>27/02/20</p>
          <p>Golden Sun Bakery</p>
          <p>$8.00</p>
          <p>$298</p>
          <button onClick={() => setIsSecondaryOpen(!isSecondaryOpen)}><i className="fa-solid fa-chevron-down"></i></button>
        </div>
        {isSecondaryOpen && (
          <div className="detailsCollapse">
            <div className="details">
              <p>Transaction type</p>
              <p>Category</p>
              <p>Note</p>
            </div>
            <div className="detailsUser">
              <p>Electronic</p>
              <p>Food<i className="fa-solid fa-pen"></i></p>
              <p>lorem<i className="fa-solid fa-pen"></i></p>
            </div>
          </div>
        )}
      </div>
    );
  };
export const CollapsibleMain2 = () => {
    const [isSecondaryOpen, setIsSecondaryOpen] = useState(false); 
  
    return (
      <div className="transaction-collapsible">
        <div className="transaction-title">
          <p>Date</p>
          <p>Description</p>
          <p>Amount</p>
          <p>Balance</p>
        </div>
        <div className="transaction">
          <p>27/02/20</p>
          <p>Golden Sun Bakery</p>
          <p>$8.00</p>
          <p>$298</p>
          <button onClick={() => setIsSecondaryOpen(!isSecondaryOpen)}><i className="fa-solid fa-chevron-down"></i></button>
        </div>
        {isSecondaryOpen && (
          <div className="detailsCollapse">
            <div className="details">
              <p>Transaction type</p>
              <p>Category</p>
              <p>Note</p>
            </div>
            <div className="detailsUser">
              <p>Electronic</p>
              <p>Food<i className="fa-solid fa-pen"></i></p>
              <p>lorem<i className="fa-solid fa-pen"></i></p>
            </div>
          </div>
        )}
      </div>
    );
  };
  export const CollapsibleMain3 = () => {
    const [isSecondaryOpen, setIsSecondaryOpen] = useState(false); 
  
    return (
      <div className="transaction-collapsible">
        <div className="transaction-title">
          <p>Date</p>
          <p>Description</p>
          <p>Amount</p>
          <p>Balance</p>
        </div>
        <div className="transaction">
          <p>27/02/20</p>
          <p>Golden Sun Bakery</p>
          <p>$8.00</p>
          <p>$298</p>
          <button onClick={() => setIsSecondaryOpen(!isSecondaryOpen)}><i className="fa-solid fa-chevron-down"></i></button>
        </div>
        {isSecondaryOpen && (
          <div className="detailsCollapse">
            <div className="details">
              <p>Transaction type</p>
              <p>Category</p>
              <p>Note</p>
            </div>
            <div className="detailsUser">
              <p>Electronic</p>
              <p>Food<i className="fa-solid fa-pen"></i></p>
              <p>lorem<i className="fa-solid fa-pen"></i></p>
            </div>
          </div>
        )}
      </div>
    );
  };

  