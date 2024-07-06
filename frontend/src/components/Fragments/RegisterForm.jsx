import { useState } from "react";
import InputForm from "../Elements/input";
import Button from "../Elements/button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const RegisterForm = () => {
  const initialState = {
    username: "",
    email: "",
    password: "",
    confPassword: "",
  };
  const [data, setData] = useState(initialState);
  const { username, email, password, confPassword } = data;
  const [msg, setMsg] = useState([]);
  const navigate = useNavigate();
  const handleChangeRegister = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/register", data);
      setData(initialState);
      navigate("/log-in");
    } catch (e) {
      const errors = e.response.data.errors.split(".");
      if (e.response) {
        setMsg(errors);
      }
    }
  };
  return (
    <form onSubmit={handleSubmitRegister}>
      <ul>
        {msg.map((message, index) => (
          <li
            key={index}
            className="text-red-600"
          >
            {message}
          </li>
        ))}
      </ul>
      <InputForm
        id="username"
        name="username"
        value={username}
        onChange={handleChangeRegister}
        type="text"
        placeholder="john doe"
        label="Username"
        labelClassName="font-roboto font-light tracking-wider"
        inputClassName="rounded-md p-2 bg-white text-black border-2"
      />
      <InputForm
        id="email"
        name="email"
        value={email}
        onChange={handleChangeRegister}
        type="email"
        placeholder="example@gmail.com"
        label="Email"
        labelClassName="font-roboto font-light tracking-wider"
        inputClassName="rounded-md p-2 bg-white text-black border-2"
      />
      <InputForm
        id="password"
        name="password"
        value={password}
        onChange={handleChangeRegister}
        type="password"
        placeholder="*******"
        label="Password"
        labelClassName="font-roboto font-light tracking-wider"
        inputClassName="rounded-md p-2 bg-white text-black border-2"
      />
      <InputForm
        id="password"
        name="confPassword"
        value={confPassword}
        onChange={handleChangeRegister}
        type="password"
        placeholder="*******"
        label="Confirm Password"
        labelClassName="font-roboto font-light tracking-wider"
        inputClassName="rounded-md p-2 bg-white text-black border-2"
      />
      <Button type="submit">Register</Button>
    </form>
  );
};
