import { useState } from "react";
import { AiOutlinePlusSquare } from "react-icons/ai";

const Counter = () => {
  const [count, setCount] = useState(1);

  return (
    <div>
      <AiOutlinePlusSquare
        size={count * 4}
        color={count >= 12 ? "red" : "green"}
        onMouseOver={(e) => console.log(e,'hovered!!!!')}
        onClick={() => setCount(count >= 12 ? count :count+1)}
      />
      <h1 style = {{ color: `${count >= 12 ? "red":"pink"}`}}>{count}</h1>
      
      <button onClick={() => setCount(count > 1 ? count - 1 : count)}>-</button>
    </div>
  );
};

export default Counter;
