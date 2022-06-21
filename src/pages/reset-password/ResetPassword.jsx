import "./style.scss";
import ChefLogo from "../../assets/svgs/chefsvg.svg";
import { Form, Input } from "antd";
import { useRef, useState } from "react";
import PrimaryButton from "../../components/buttons/primary-button/PrimaryButton";
import LoadingButton from "../../components/buttons/loading-button/LoadingButton";
import PasswordSuccess from "./PasswordSuccess";

const ResetPassword = () => {
  const [form] = Form.useForm();
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [istrue, setIsTrue] = useState(false);
  const onFinish = (values) => {
    setLoading(true);
    console.log(values);
    setLoading(false);
    setIsTrue(true);
  };
  return (
    <>
      {istrue && <PasswordSuccess />}
      {!istrue && (
        <div className="sign_container">
          <div className="sign_body  container">
            <div className="sign_header">
              <img src={ChefLogo} alt="logo" />
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
