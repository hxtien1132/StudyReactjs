import { memo } from "react";
// React.memo: tránh re-render k cần thiết (component)
const Content = ({ count }) => {
    console.log("re-render");
  return (
    <div>
      <h1>hxtien {count}</h1>
    </div>
  );
};

export default memo(Content);
