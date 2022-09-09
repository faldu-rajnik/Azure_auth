import {
  UnauthenticatedTemplate,
  AuthenticatedTemplate,
} from "@azure/msal-react";
import React from "react";
import Footer from "../../component/footer/Footer";
import Header from "../../component/header/Header";
import { Link } from "react-router-dom";
import "./profile.scss";

function Profile() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  return (
    <div>
      <Header />
      <main className="button_logo">
        <UnauthenticatedTemplate>
          <h1>
            You are not authorized to view this page <Link to="/">Login</Link>
          </h1>
        </UnauthenticatedTemplate>
        <AuthenticatedTemplate>
          <ul>
            <li>
              Welcome <b>{userData?.name}</b>
            </li>
            <li>
              Your Tenant is <b>{userData?.tenantId}</b>
            </li>
            <li>
              Your preferred email or username{" "}
              <b>{userData?.idTokenClaims.preferred_username}</b>
            </li>
          </ul>
        </AuthenticatedTemplate>
      </main>
      <Footer />
    </div>
  );
}

export default Profile;
