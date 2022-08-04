import "./style.scss";
import DeliverfixLogo from "../../assets/images/new_logo.png";
import PasswordSuccess from "./PasswordSuccess";
import { useEffect, useState } from "react";
import AuthCode from "react-auth-code-input";

const OtpScreen = () => {
  const [otpCode, setOtpCode] = useState(false);
  const [istrue, setIsTrue] = useState(false);

  const handleChange = (res) => {
    setOtpCode(res);
    console.log(res);
  };

  const sendOtp = () => {
    console.log("Sent!!!");
    setIsTrue(true);
  };

  useEffect(() => {
    if (otpCode?.length === 4) {
      sendOtp();
    }
  }, [otpCode?.length]);
  return (
    <>
      {istrue ? (
        <PasswordSuccess />
      ) : (
        <div className="sign_container">
          <div className="sign_body  container">
            <div className="sign_header">
              <img src={DeliverfixLogo} alt="logo" />
            </div>
            <div className="sign_otp_form">
              <p>We sent you an OTP code. Please enter for verification</p>
            </div>
            <div className="otp_field">
              <AuthCode
                onChange={handleChange}
                allowedCharacters="numeric"
                length={4}
                containerClassName="otp_container"
                className="otp_container"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OtpScreen;
