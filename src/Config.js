// export const config = {
//   appId: "43a20526-ceea-410f-8f59-2f9df7c22c0b",
//   redirectUri: "http://localhost:3000",
//   scopes: ["user.read"],
//   authority:
//     "https://login.microsoftonline.com/commom/oauth2/v2.0/authorize?client_id=43a20526-ceea-410f-8f59-2f9df7c22c0b&response_type=code&redirecturi=http://localhost:3000",
// };
export const msalConfig = {
  auth: {
    clientId: "-- client id here",
    client_secret: "-- client secret here ---",
    authority: "https://login.microsoftonline.com/common", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
    redirectUri: "http://localhost:3000",
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
  scopes: ["Mail.ReadWrite Mail.Send"],
};

// Add the endpoints here for Microsoft Graph API services you'd like to use.
export const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
};
