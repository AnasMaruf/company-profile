import React from "react";
import InputForm from "../Elements/input";
import { useState } from "react";
import Button from "../Elements/button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const initialStateLogin = {
    email: "",
    password: "",
  };
  const [data, setData] = useState(initialStateLogin);
  const { email, password } = data;
  const [msg, setMsg] = useState([]);
  const navigate = useNavigate();
  const handleChangeLogin = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmitLogin = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8000/api/login", data);
      setData(initialStateLogin);
      navigate("/");
    } catch (e) {
      const errors = e.response.data.errors.split(".");
      if (e.response) {
        setMsg(errors);
      }
    }
  };
  return (
    <form onSubmit={handleSubmitLogin}>
      <ul>
        {msg.map((message, index) => (
          <li key={index} className="text-red-600">
            {message}
          </li>
        ))}
      </ul>
      <InputForm
        id="email"
        name="email"
        value={email}
        onChange={handleChangeLogin}
        type="email"
        placeholder="example@gmail.com"
        label="Email"
      />
      <InputForm
        id="password"
        name="password"
        value={password}
        onChange={handleChangeLogin}
        type="password"
        placeholder="*******"
        label="Password"
      />
      <Button type="submit">Login</Button>
    </form>
  );
};
