import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import React from "react";
import { ThirdPartySignIn } from "../../services/authentication";
import { useDispatch } from "react-redux";

export default function ThirdPartySignIns() {
  const dispatch = useDispatch();

  const client=process.env.REACT_APP_CLIENT_ID; 
 
  return (
    <div className="justify-content-center" style={{ marginTop: "1rem" }}>
      <GoogleOAuthProvider clientId={client}>
        <GoogleLogin
          onSuccess={(r) => ThirdPartySignIn(dispatch, r.credential)}
          onFailure={(e) => console.log("Error! ", e)}
        />
      </GoogleOAuthProvider>
    </div>
  );
}
