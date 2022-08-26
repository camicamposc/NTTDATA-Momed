import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";

import { UserContext } from "../context/UserProvider";
import Button from "../components/Button";
import Input from "../components/Input";
import "./Home.css";

const Home = () => {
  const { user } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);

  const { loginUser, forgotPassword } = useContext(UserContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Procesando form:", email, password);
    try {
      await loginUser(email, password, checked);
      console.log("Sesión iniciada correctamente");
      navigate("/profesionales");
    } catch (error) {
      console.log(error);
    }
  };

  const handleForgotPassword = async () => {
    try {
      console.log(email);
      await forgotPassword(email);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const checkedUser = () => {
    const userSaved = localStorage.getItem("user");
    if (userSaved) {
      const emailPassword = JSON.parse(userSaved);
      setEmail(emailPassword.email);
      setPassword(emailPassword.password);
    }
  };
  React.useEffect(() => checkedUser(), []);

  return (
    <>
      <div className="App">
        <form className="form" onSubmit={handleSubmit}>
          <h1>PROYECTO MOMED</h1>
          <div className="group">
            <Input
              type="email"
              placeholder="Usuario"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="group">
            <Input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="group-two">
            <div className="group-checkbox">
              <input
                type="checkbox"
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
              <label for="recuerdame">Recordarme</label>
            </div>
            <div>
              <button
                className="btn-clear"
                type="reset"
                onClick={handleForgotPassword}
              >
                Recuperar contraseña
              </button>
            </div>
          </div>

          <Button className="btn" type="submit">
            Iniciar sesión
          </Button>
        </form>
      </div>
    </>
  );
};

export default Home;
