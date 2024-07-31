import { useContext, useEffect, useState } from "react";
import userContext from "../context/userContext";

const Login = () => {
  const { setUser } = useContext(userContext);

  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(input);
  };

  return (
    <div>
      <h2>What is your name my BOY ?</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={handleChange}
          placeholder="what is your name ?"
          type="text"
        />{" "}
        <button 
        style={{cursor:'pointer'}}
        type="submit">submit</button>
      </form>
    </div>
  );
};

export default Login;
