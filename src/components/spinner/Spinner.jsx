import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
const Spinner = () => {
  return (
    <div className="loading">
      <Spin indicator={antIcon} size={20} />
    </div>
  );
};

export default Spinner;
