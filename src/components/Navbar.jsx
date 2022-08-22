import { Link, useNavigate } from "react-router-dom";

import { useContext } from "react";
import { UserContext } from "../context/UserProvider";

const Navbar = () => {
  const { user, signOutUser } = useContext(UserContext);
  const navegate = useNavigate();

  const handleClickLogout = async () => {
    try {
      await signOutUser();
      navegate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {user && (
        <>
          <Link to="/dashboard"> Dashboard</Link>
          <Link to="/aportes"> Aportes</Link>
          <Link to="/profesionales"> Profesionales</Link>
          <Link to="/mantenedores"> Mantenedores</Link>
          <button onClick={handleClickLogout}>Logout</button>
        </>
      )}
    </div>
  );
};

export default Navbar;
