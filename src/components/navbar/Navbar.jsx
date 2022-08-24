import { Link, useNavigate } from "react-router-dom";
import './style.css'
import { useContext } from "react";
import { UserContext } from "../../context/UserProvider";

const Navbar = () => {
  const { user, signOutUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleClickLogout = async () => {
    try {
      await signOutUser();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {user && (
        <>
         <aside>
      <ul className="top">
        <li>
        <Link to="/dashboard"> Dashboard</Link>
        </li>
        <li>
        <Link to="/aportes"> Aportes</Link>
        </li>
        <li>
        <Link to="/profesionales"> Profesionales</Link>
        </li>
        <li>
        <Link to="/mantenedores"> Mantenedores</Link>
        </li>
      </ul>
      <ul className='bottom'>
        <li>
        <button onClick={handleClickLogout}>Logout</button>
        </li>
      </ul>
    </aside>
      </>
      )}
    </div>
  );
};

export default Navbar;
