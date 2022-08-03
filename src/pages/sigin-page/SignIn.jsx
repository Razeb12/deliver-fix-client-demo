import "./style.scss";
import ChefLogo from "../../assets/svgs/chefsvg.svg";
import { Link } from "react-router-dom";
import { Form, Input } from "antd";
import { useRef, useState } from "react";
import PrimaryButton from "../../components/buttons/primary-button/PrimaryButton";
import LoadingButton from "../../components/buttons/loading-button/LoadingButton";
import SecondaryButton from "../../components/buttons/secondary-button/SecondaryButton";
import FacebookSVG from "../../assets/svgs/facebook_svg.svg";
import AuxiliaryButton from "../../components/buttons/auxiliary-button/AuxiliaryButton";
import GoogleSVG from "../../assets/svgs/google_svg.svg";
import { SIGNUP_PAGE } from "../../routes";

const SignIn = () => {
  const [form] = Form.useForm();
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const onFinish = (values) => {
    setLoading(true);
    console.log(values);
    setLoading(false);
  };
  return (
    <div className="sign_container">
      <div className="sign_body  container">
        <div className="sign_header">
          <img src={ChefLogo} alt="logo" />
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
              ]}
            >
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
              ]}
            >
              <Input
                placeholder="Password"
                type="password"
                className="form_input"
              />
            </Form.Item>
            <div className="forgot_link">
              <Link to="/forgot-password">Forgot Password!</Link>
            </div>
            {!loading && <PrimaryButton buttonText="Login" htmlType="submit" />}
            {loading && <LoadingButton buttonText="Loading..." />}
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
