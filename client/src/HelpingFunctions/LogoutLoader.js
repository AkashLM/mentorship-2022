import React from "react";
import * as FiIcons from "react-icons/fi";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import './LogoutButton.css'

function LogoutLoader(props) {
  const { refresher, setRefresher } = props;
  const cookies = new Cookies();
  const handleLogoutFunction = () => {
    cookies.remove("KeyToken");
    setRefresher(!refresher);
    window.location.reload();
  };
  return (
    <div className="logoutLoader">
      

        <button onClick={handleLogoutFunction} className='logoutButton'>
        <Link to="/" className="logoutButtonLink">
         <span>Return</span><span><FiIcons.FiLogOut /></span>
        </Link>
      </button>
     
    </div>
  );
}

export default LogoutLoader;
