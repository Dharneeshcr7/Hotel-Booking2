import "./navbar.css";
import { Link,useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useCookies } from 'react-cookie';
import Cookies from 'js-cookie';

const Navbar = () => {
  const [cookies, setCookie, removeCookie] = useCookies([]);
  const { user,dispatch } = useContext(AuthContext);
  const navigate = useNavigate()
  const handleClickl = async (e) => {
    e.preventDefault();
    
    try {
      
      navigate("/login")
    } catch (err) {
      alert("Cannot Login");
    }
  };
  const handleClick2 = async (e) => {
    e.preventDefault();
    
    try {
      localStorage.removeItem('user');
      removeCookie('access_token');
      dispatch({ type: "LOGOUT" });
      navigate("/login")
    } catch (err) {
      alert("Cannot Login");
    }
  };
  
  const handleClickr = async (e) => {
    e.preventDefault();
    
    try {
      
      navigate("/register")
    } catch (err) {
      alert("Cannot Register");
    }
  };
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Booking App</span>
        </Link>
        {user ? (
          <div className="navItems">
            <div>{user.username}</div>
            <button className="navButton" onClick={handleClick2}>LogOut</button>
          </div>
        ) : (
          <div className="navItems">
            <button className="navButton" onClick={handleClickr}>Register</button>
            <button className="navButton" onClick={handleClickl}>Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
