import React from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

const NavBar = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <header>
      <nav>
        <ul className="list">

          <div className="list-home">
            <li>
              <a>
                <Link to="/"> App Routing Task </Link>
              </a>
            </li>
          </div>

          {state?.logged ? (
            <div className="list-login">
              <span className="username">Welcome, {state?.email}</span>
              <button className="btn-logout" onClick={onLogout}>
                Cerrar Sesión
              </button>
            </div>
          ) : (
            <div className="list-login">
              <li>
                <a>
                  <Link to="/login"> Login </Link>
                </a>
              </li>
              <li>
                <a>
                  <Link to="/register"> Register </Link>
                </a>
              </li>
            </div>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
