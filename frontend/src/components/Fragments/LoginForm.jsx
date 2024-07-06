import InputForm from "../Elements/input";
import { useState } from "react";
import Button from "../Elements/button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useTokenStored } from "../../zustand/store";

export const LoginForm = () => {
  const initialStateLogin = {
    email: "",
    password: "",
  };
  const setToken = useTokenStored((state) => state.setToken);
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
      const response = await axios.post(
        "http://localhost:8000/api/login",
        data
      );
      if (response.data.token) setToken(response.data.token);
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
          <li
            key={index}
            className="text-red-600"
          >
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
        inputClassName="rounded-md p-2 bg-white text-black border-2"
        labelClassName="font-roboto font-light tracking-wider"
      />
      <InputForm
        id="password"
        name="password"
        value={password}
        onChange={handleChangeLogin}
        type="password"
        placeholder="*******"
        label="Password"
        inputClassName="rounded-md p-2 bg-white text-black border-2"
        labelClassName="font-roboto font-light tracking-wider"
      />
      <Button type="submit">Login</Button>
    </form>
  );
};
