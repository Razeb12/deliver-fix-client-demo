import "./style.scss";
import DeliverfixLogo from "../../assets/images/new_logo.png";
import { Form, Input, message } from "antd";
import { useRef, useState, useContext } from "react";
import PrimaryButton from "../../components/buttons/primary-button/PrimaryButton";
import LoadingButton from "../../components/buttons/loading-button/LoadingButton";
import AuthContext from "../../context/auth-context/AuthContext";
import { useNavigate } from "react-router-dom";
import { OTP_PAGE } from "../../routes";

const ForgotPassword = () => {
  const { forgotPassword } = useContext(AuthContext);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const onFinish = async (values) => {
    setLoading(true);
    const { email } = values;
    const forgotpassword = await forgotPassword(email);
    if (forgotpassword) {
      setLoading(false);
      message.success("Email sent successfully");
      navigate(OTP_PAGE);
    } else {
      setLoading(false);
      message.error("Unable to send email, please verify details");
    }
  };
  return (
    <div className="sign_container">
      <div className="sign_body  container">
        <div className="sign_header">
          <img src={DeliverfixLogo} alt="logo" />
          <h1>Forgot Password</h1>
        </div>
        <div className="sign_form">
          <p>You will receive a verification code to create a new password</p>
          <Form onFinish={onFinish} form={form} ref={formRef}>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Email address is required!",
                },
              ]}
            >
              <Input
                placeholder="Email address"
                className="form_input"
                type="text"
              />
            </Form.Item>
            {!loading && (
              <PrimaryButton buttonText="Continue" htmlType="submit" />
            )}
            {loading && <LoadingButton buttonText="Loading..." />}
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
