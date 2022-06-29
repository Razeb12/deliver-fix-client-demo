import { Input, Form } from "antd";
import "./style.scss";

const NormalInput = ({ label, onChange, type, minorText }) => {
  return (
    <div className="normal_input">
      <Form.Item label={label} labelCol={{ span: 24 }}>
        <Input onChange={onChange} className="normalinput" type={type} />
      </Form.Item>
      <p>{minorText}</p>
    </div>
  );
};

export default NormalInput;
