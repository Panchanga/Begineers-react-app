import React, { useState } from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const Counter = () => {
  const [count, setCount] = useState(1);
  const [hovered, setHovered] = useState("");

  return (
    <div>
      <AiOutlinePlusCircle
        size={count + 24}
        color={count >= 12 ? "red" : `${hovered === "plus" ? "gold" : "green"}`}
        onMouseOver={(e) => setHovered("plus")}
        onClick={() => setCount(count >= 12 ? count : count + 1)}
      />
      <h1 style={{ color: `${count >= 12 ? "red" : "pink"}` }}>{count}</h1>
      <AiOutlineMinusCircle
        size={count + 24}
        color={
          count >= 12 ? "red" : `${hovered === "minus" ? "gold" : "green"}`
        }
        onMouseOver={(e) => setHovered("minus")}
        onClick={() => setCount(count > 1 ? count - 1 : count)}
      />
    </div>
  );
};

export default Counter;
