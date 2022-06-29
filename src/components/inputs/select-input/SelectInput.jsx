import "./style.scss";
import { Form, Select } from "antd";

const SelectInput = ({ onChange, placeholder, value, label, values }) => {
  const { Option } = Select;
  return (
    <div className="select_input">
      <Form.Item label={label} labelCol={{ span: 24 }}>
        <Select
          onChange={onChange}
          className="form_select"
          placeholder={placeholder}
          value={values}
        >
          {value?.map((item, index) => (
            <Option value={item} key={index}>
              {item}
            </Option>
          ))}
        </Select>
      </Form.Item>
    </div>
  );
};

export default SelectInput;
