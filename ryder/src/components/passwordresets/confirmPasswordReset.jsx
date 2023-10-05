/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Email from "../../images/Email.svg";
import "../../styles/confirmPasswordReset.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Define a styled component for the body
const BodyContainer = styled.body`
  font-family: "Manrope";
  background-color: #f5f5f5;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ConfirmPasswordReset = () => {
  const handleResendEmail = () => {
    // Call the SendEmail handler to resend the email
    //SendEmail(yourUserId);
  };

  return (
    <BodyContainer>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="frame">
            <img
              className="img-fluid"
              alt="Vector"
              src={Email}
              style={{ height: "72px", width: "90px", alignSelf: "center" }}
            />
            <h1 className="mt-3 text-center">Check your mail</h1>
            <p className="text-center">
              We sent a password reset link to your email. <br />
              Please click the link to reset your password
            </p>
            <p className="text-center">
              Didn't receive the email?{" "}
              <a
                href="#"
                onClick={handleResendEmail}
                style={{
                  textDecoration: "none",
                  color: "#FB8500"
                }}
              >
                Click to Resend link
              </a>
            </p>

            <div className="div-wrapper">
              <button style={{ width: "204px" }}>
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Back to Login
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </BodyContainer>
  );
};

export default ConfirmPasswordReset;
