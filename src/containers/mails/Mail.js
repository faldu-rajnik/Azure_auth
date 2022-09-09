import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { Link } from "react-router-dom";

function Mail() {
  const [mailData, setMailData] = useState({});
  const [error, setError] = useState("");
  const accessToken = localStorage.getItem("token");
  useEffect(() => {
    axios
      .get("https://graph.microsoft.com/v1.0/me/messages/", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((res) => {
        console.log("res", res);
        setMailData(res.data);
      })
      .catch((e) => {
        console.log("error", e.message);
        setError(e.message);
      });
  }, []);
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
          <p style={{ color: "red" }}>{error}</p>
          <div>
            {mailData?.value?.map((i) => {
              return (
                <div style={{ border: "1px solid" }}>
                  <p>{i?.body.contentType}</p>
                  <div dangerouslySetInnerHTML={{ __html: i.body.content }} />
                </div>
              );
            })}
          </div>
        </AuthenticatedTemplate>
      </main>
      <Footer />
    </div>
  );
}

export default Mail;
