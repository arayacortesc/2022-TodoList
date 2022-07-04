import React, { useState } from "react";

const FormTodo = (props) => {
  const [description, setDescription] = useState("");
  return (
    <div>
      <input
        type="text"
        className="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="" disabled={description ? "" : "disabled"}>
        Agregar
      </button>
    </div>
  );
};

export default FormTodo;
