import "./style.scss";
import ChefLogo from "../../assets/svgs/chefsvg.svg";
import { Form, Input } from "antd";
import { useRef, useState } from "react";
import PrimaryButton from "../../components/buttons/primary-button/PrimaryButton";
import LoadingButton from "../../components/buttons/loading-button/LoadingButton";

const ForgotPassword = () => {
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
