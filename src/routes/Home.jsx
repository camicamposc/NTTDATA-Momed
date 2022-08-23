import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
//import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserProvider";

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
      <h1>Home</h1>
      <h2>{user ? "online" : "offline"}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Usuario"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>
          <input
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          <p>Recordarme</p>
        </label>
        <button type="reset" onClick={handleForgotPassword}>
          Recuperar contraseña
        </button>

        <button type="submit">Iniciar sesión</button>
      </form>
    </>
  );
};

export default Home;
