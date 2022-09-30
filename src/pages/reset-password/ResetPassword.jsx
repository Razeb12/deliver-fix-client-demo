import "./style.scss";
import DeliverfixLogo from "../../assets/images/new_logo.png";
import { Form, Input, message } from "antd";
import { useRef, useState, useEffect, useContext } from "react";
import PrimaryButton from "../../components/buttons/primary-button/PrimaryButton";
import LoadingButton from "../../components/buttons/loading-button/LoadingButton";
import PasswordSuccess from "./PasswordSuccess";
import { useLocation } from "react-router-dom";
import AuthContext from "../../context/auth-context/AuthContext";
const ResetPassword = () => {
  const location = useLocation();
  const { resetPassword } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [form] = Form.useForm();
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [istrue, setIsTrue] = useState(false);
  const onFinish = (values) => {
    setLoading(true);
    const { otp, password } = values;
    resetPassword(email, otp, password).then((res) => {
      if (res) {
        setLoading(false);
        setIsTrue(true);
      } else {
        setLoading(false);
        message.error("Unable to reset password, please verify details");
      }
    });
  };

  function callOTP() {
    message.info(
      "An OTP has been sent to your email, please enter it below in order to reset your password",
      3
    );
  }

  useEffect(() => {
    callOTP();
    setEmail(location.state.email);
  }, [location.state.email]);
  return (
    <>
      {istrue && <PasswordSuccess />}
      {!istrue && (
        <div className="sign_container">
          <div className="sign_body  container">
            <div className="sign_header">
              <img src={DeliverfixLogo} alt="logo" />
              <h1>Reset Password</h1>
            </div>
            <div className="sign_form">
              <p>Please choose a password that you haven't used before</p>
              <Form onFinish={onFinish} form={form} ref={formRef}>
                <Form.Item
                  name="password"
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "Please input your password",
                    },
                  ]}
                >
                  <Input
                    placeholder="Password"
                    type="password"
                    className="form_input"
                  />
                </Form.Item>
                <Form.Item
                  name="verifyPassword"
                  dependencies={["password"]}
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "Please confirm your password",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          "The two passwords that you entered do not match!"
                        );
                      },
                    }),
                  ]}
                >
                  <Input
                    placeholder="Confirm Password"
                    type="password"
                    className="form_input"
                  />
                </Form.Item>
                <Form.Item
                  name="otp"
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "Please enter your otp sent to your email",
                    },
                  ]}
                >
                  <Input
                    placeholder="Enter OTP"
                    type="tel"
                    className="form_input"
                  />
                </Form.Item>
                {!loading && (
                  <PrimaryButton
                    buttonText="Change Password"
                    htmlType="submit"
                  />
                )}
                {loading && <LoadingButton buttonText="Loading..." />}
              </Form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ResetPassword;
