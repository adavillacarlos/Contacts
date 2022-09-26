import React from "react";
import { ToastContainer } from "react-toastify";
import SignUpForm from "../components/Form/SignUpForm";
import ThirdPartySignIns from "../components/ThirdParty/ThirdPartySignIns";

export default function SignUpPage() {

  return (
    <div className="container">
      <ToastContainer />
      <div className="row">
        <div className="offset-md-2 col-lg-5 col-md-7 offset-lg-4 offset-md-3 p-5">
          <div className="panel border bg-white">
            <div className="panel-heading mt-3">
              <h3 className="text-center">Sign Up</h3>
            </div>
            <div className="panel-body p-3">
           <SignUpForm />
            </div>
            <div className="mx-3 my-2 py-2 bordert">
              <div className="text-center py-3">
                     <ThirdPartySignIns />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
