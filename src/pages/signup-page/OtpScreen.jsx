import "./style.scss";
import DeliverfixLogo from "../../assets/images/new_logo.png";
import PasswordSuccess from "./PasswordSuccess";
import { useEffect, useState, useContext } from "react";
import AuthCode from "react-auth-code-input";
import { message, Spin } from "antd";
import AuthContext from "../../context/auth-context/AuthContext";

const OtpScreen = () => {
  const [otp, setOtp] = useState(false);
  const [istrue, setIsTrue] = useState(false);
  const [loading, setLoading] = useState(false);
  const { verifyOTP } = useContext(AuthContext);
  const handleChange = (res) => {
    setOtp(res);
  };

  const sendOtp = async () => {
    setLoading(true);
    const email = localStorage.getItem("userEmail");
    const res = await verifyOTP(email, otp);
    if (res) {
      message.success("OTP verified successfully");
      localStorage.removeItem("userEmail");
      setIsTrue(true);
      setLoading(false);
    } else {
      message.error("OTP verification failed, try again");
      setIsTrue(false);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (otp?.length === 4) {
      sendOtp();
    }
  }, [otp?.length]);
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
            <div className="spinner" style={{ textAlign: "center" }}>
              {loading && <Spin />}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OtpScreen;
