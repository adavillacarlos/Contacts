import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import React from "react";
import { ThirdPartySignIn } from "../../services/authentication";
import { useDispatch } from "react-redux";

export default function ThirdPartySignIns() {
  const dispatch = useDispatch();
 
  return (
    <div className="justify-content-center" style={{ marginTop: "1rem" }}>
      <GoogleOAuthProvider clientId="882926934134-b3eb5o11kt5bf3qgqjuaj34563v3d7f0.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={(r) => ThirdPartySignIn(dispatch, r.credential)}
          onFailure={(e) => console.log("Error! ", e)}
        />
      </GoogleOAuthProvider>
    </div>
  );
}
