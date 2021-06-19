import React, { useState } from "react";
import Child from "./Child.js";

function Parent() {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onReset = () => {
    setText("");
  };

  return (
    <div>
      <Child />
      <input onChange={onChange} value={text} />
      <button onClick={onReset}>Reset</button>
      <div>
        <b>Value : </b>
        {text}
      </div>
    </div>
  );
}

export default Parent;
