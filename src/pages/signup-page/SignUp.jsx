import "./style.scss";
import DeliverfixLogo from "../../assets/images/new_logo.png";
import { Link, useNavigate } from "react-router-dom";
import { Form, Input, message } from "antd";
import { useRef, useState, useContext, useEffect } from "react";
import PrimaryButton from "../../components/buttons/primary-button/PrimaryButton";
import LoadingButton from "../../components/buttons/loading-button/LoadingButton";
import SecondaryButton from "../../components/buttons/secondary-button/SecondaryButton";
import FacebookSVG from "../../assets/svgs/facebook_svg.svg";
import AuxiliaryButton from "../../components/buttons/auxiliary-button/AuxiliaryButton";
import GoogleSVG from "../../assets/svgs/google_svg.svg";
import { SIGNIN_PAGE, OTP_PAGE, MAIN_PAGE } from "../../routes";
import AuthContext from "../../context/auth-context/AuthContext";

const SignUp = () => {
  const [form] = Form.useForm();
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const { signUp, userToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const onFinish = async (values) => {
    setLoading(true);
    const { fullName, email, password } = values;

    const signup = await signUp(fullName, email, password);
    if (signup === true) {
      setLoading(false);
      message.success("Signup Successful");
      navigate(OTP_PAGE);
      localStorage.setItem("userEmail", email);
    } else {
      setLoading(false);
      message.error("Unable to signup user, please verify details");
    }
  };

  useEffect(() => {
    if (userToken) navigate(MAIN_PAGE);
    else return;
  }, [userToken, navigate]);
  return (
    <div className="sign_container">
      <div className="sign_body  container">
        <div className="sign_header">
          <img src={DeliverfixLogo} alt="logo" />
          <h1>Registration</h1>
        </div>
        <div className="sign_form">
          <Form onFinish={onFinish} form={form} ref={formRef}>
            <Form.Item
              name="fullName"
              rules={[
                {
                  required: true,
                  message: "Full Name is required!",
                },
              ]}
            >
              <Input
                placeholder="Your Name"
                className="form_input"
                type="text"
              />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Email is required!",
                },
                {
                  type: "email",
                  message: "The email is not a valid email",
                },
              ]}
            >
              <Input placeholder="Email" type="email" className="form_input" />
            </Form.Item>
            <Form.Item
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Phone Number is required!",
                },
              ]}
            >
              <Input placeholder="Mobile" type="tel" className="form_input" />
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
            {!loading && (
              <PrimaryButton buttonText="Register" htmlType="submit" />
            )}
            {loading && <LoadingButton buttonText="Please wait..." />}
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
                buttonText="Sign with facebook account"
                imgUrl={FacebookSVG}
              />
              <AuxiliaryButton
                buttonText="Sign with google account"
                imgUrl={GoogleSVG}
              />
            </div>
            <p>
              Already have an account? <Link to={SIGNIN_PAGE}>Log in!</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
