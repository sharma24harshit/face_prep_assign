import { Heading } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";

const Login = () => {
  const [obj, setObj] = useState({ email: "", password: "" });
  const nav = useNavigate();
  const { setIsAuth } = useContext(AuthContext);

  const handleChange = (e) => {
    setObj({ ...obj, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (obj.email == "foo" && obj.password == "bar") {
      setIsAuth(true);
      nav("/");
    } else {
      console.log("wrong credentials");
    }
  };

  return (
    <div>
      <Heading className="Heading">Login Page</Heading>
      <div className="formBox">
        <form onSubmit={handleSubmit}>
          <label>Enter Email</label>
          <br />
          <input
            type="text"
            value={obj.email}
            placeholder="Enter email"
            name="email"
            onChange={handleChange}
          />
          <br />
          <label>Enter Password</label>
          <br />
          <input
            type="password"
            value={obj.password}
            name="password"
            placeholder="Enter Password"
            onChange={handleChange}
          />
          <br />
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default Login;
