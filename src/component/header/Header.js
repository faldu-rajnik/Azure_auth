import React from "react";
import "./header.scss";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";
import { Link } from "react-router-dom";

function Header() {
  const { instance } = useMsal();
  async function Logout(instance) {
    await instance
      .logoutPopup()
      .then((res) => {
        // console.log("logout res", res);
        localStorage.removeItem("token");
        localStorage.removeItem("userData");
      })
      .catch((e) => {
        console.log("error", e);
      });
  }
  return (
    <div>
      <nav className="navbar navbar-dark justify-content-between navbar_background">
        <Link to="/" className="navbar-brand">
          Outlook Email
        </Link>
        <UnauthenticatedTemplate>
          <p>login to proceed</p>
        </UnauthenticatedTemplate>
        <AuthenticatedTemplate>
          <div>
            <ul className="nav_menu">
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/mails">Mail</Link>
              </li>
              <li>
                <Link to="/send-emails">Send Mails</Link>
              </li>
              <li>
                {" "}
                <button
                  className="btn btn-primary"
                  onClick={() => Logout(instance)}
                >
                  Signout
                </button>
              </li>
            </ul>
          </div>
        </AuthenticatedTemplate>
      </nav>
    </div>
  );
}

export default Header;
