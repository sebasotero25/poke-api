import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changueName } from "../store/slices/name.slice";

const InputName = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const enterName = () => {
    dispatch(changueName(userName));
    navigate("/pokemons");
  };
  return (
    <div>
      <h1>Input name</h1>
      <input
        type="text"
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
      />
      <button onClick={enterName}>Enter</button>
    </div>
  );
};

export default InputName;
