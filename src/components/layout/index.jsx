import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./style.css";

const Layout = () => {
  return (
    <div className="container">
      <header>
          <div>
            <h4>Logo</h4>
          </div>
          <div className="link">
            <NavLink className="nav" to="/home">Home</NavLink>
            <NavLink className="nav" to="/debts">Debts</NavLink>
            <NavLink className="nav" to="/transactions">Transactions</NavLink>
          </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
};

export default Layout;
