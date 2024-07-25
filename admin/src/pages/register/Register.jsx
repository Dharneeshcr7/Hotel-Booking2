import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./register.scss";
import { BACKEND } from "../../hostl";
const Register = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
    phone:undefined,
    city:undefined,
    country:undefined,
    email:undefined
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    //dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(`https://hotel-booking2-17hc.onrender.com/api/auth/register`, credentials);
      //dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/login")
    } catch (err) {
      alert("Cannot Register");
    }
  };


  return (
    <div className="login">
      <div className="lContainer">
        <div className="register2">Registration Page
        </div>
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="text"
          placeholder="phone"
          id="phone"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="text"
          placeholder="email"
          id="email"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="text"
          placeholder="city"
          id="city"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="text"
          placeholder="country"
          id="country"
          onChange={handleChange}
          className="lInput"
        />
        <button disabled={loading} onClick={handleClick} className="lButton">
          Login
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Register;