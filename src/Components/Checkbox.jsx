import React from "react";

const Checkbox = (props) => {
  const {
    onChange,
    data: { id, description, done }
  } = props;

  return (
    <div>
      <input
        type="checkbox"
        name={id}
        defaultChecked={done}
        onChange={onChange}
      />
      <div>{description}</div>
    </div>
  );
};

export default Checkbox;
