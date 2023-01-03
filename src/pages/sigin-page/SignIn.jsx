import "./style.scss";
import DeliverfixLogo from "../../assets/images/new_logo.png";
import { Link, useNavigate } from "react-router-dom";
import { Form, Input, message } from "antd";
import { useRef, useState, useEffect, useContext } from "react";
import PrimaryButton from "../../components/buttons/primary-button/PrimaryButton";
import LoadingButton from "../../components/buttons/loading-button/LoadingButton";
import SecondaryButton from "../../components/buttons/secondary-button/SecondaryButton";
import FacebookSVG from "../../assets/svgs/facebook_svg.svg";
import AuxiliaryButton from "../../components/buttons/auxiliary-button/AuxiliaryButton";
import GoogleSVG from "../../assets/svgs/google_svg.svg";
import { SIGNUP_PAGE, MAIN_PAGE } from "../../routes";
import AuthContext from "../../context/auth-context/AuthContext";
const SignIn = () => {
  const { userToken, signIn } = useContext(AuthContext);
  const [form] = Form.useForm();
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onFinish = async values => {
    navigate(MAIN_PAGE);
    setLoading(true);
    const { email, password } = values;

    const login = await signIn(email, password);
    if (login) {
      setLoading(false);
      message.success("Login Successful");
      navigate(MAIN_PAGE);
    } else {
      setLoading(false);
      message.error("Unable to login user, please verify details");
    }
  };

  useEffect(
    () => {
      if (userToken) navigate(MAIN_PAGE);
      else return;
    },
    [userToken, navigate]
  );
  return (
    <div className="sign_container">
      <div className="sign_body  container">
        <div className="sign_header">
          <img src={DeliverfixLogo} alt="logo" />
          <h1>Login</h1>
        </div>
        <div className="sign_form">
          <Form onFinish={onFinish} form={form} ref={formRef}>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Email or Phone Number is required!",
                },
              ]}>
              <Input
                placeholder="Email or Phone Number"
                className="form_input"
                type="text"
              />
            </Form.Item>
            <Form.Item
              name="password"
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please input your password",
                },
              ]}>
              <Input
                placeholder="Password"
                type="password"
                className="form_input"
              />
            </Form.Item>
            <div className="forgot_link">
              <Link to="/forgot-password">Forgot Password!</Link>
            </div>
            <div className="submit_btns">
              {!loading &&
                <PrimaryButton buttonText="Login" htmlType="submit" />}
              {loading && <LoadingButton buttonText="Please wait..." />}
            </div>
          </Form>
          <div className="form_extra_auth">
            <div className="or_sign">
              <hr />
              <p>
                <span>or</span>
              </p>
              <hr />
            </div>
            <div className="auth_btns">
              <SecondaryButton
                buttonText="Login with facebook account"
                imgUrl={FacebookSVG}
              />
              <AuxiliaryButton
                buttonText="Login with google account"
                imgUrl={GoogleSVG}
              />
            </div>
            <p>
              Don't have an account? <Link to={SIGNUP_PAGE}>Register Now!</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
