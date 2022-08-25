import { Link, useNavigate, NavLink } from "react-router-dom";
import "./style.css";
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
                <NavLink activeClassName="active" to="/dashboard">
                  <span class="material-symbols-outlined">dashboard</span>
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/aportes">
                  <span class="material-symbols-outlined">groups</span>
                  Aportes
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/profesionales">
                  <span class="material-symbols-outlined">business_center</span>
                  Profesionales
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/mantenedores">
                  <span class="material-symbols-outlined">folder</span>
                  Mantenedores
                </NavLink>
              </li>
            </ul>
            <ul className="bottom">
              <li>
                <button onClick={handleClickLogout}>
                  <span class="material-symbols-outlined">logout</span>
                  Logout
                </button>
              </li>
            </ul>
          </aside>
        </>
      )}
    </div>
  );
};

export default Navbar;
