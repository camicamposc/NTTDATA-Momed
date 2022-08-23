import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./routes/Home";
import Dashboard from "./routes/Dashboard";
import Aportes from "./routes/Aportes";
import Mantenedores from "./routes/Mantenedores";
import Profesionales from "./routes/Profesionales";

import RequireAuth from "./components/RequireAuth";
import { useContext } from "react";
import { UserContext } from "./context/UserProvider";

import { SetData } from "./context/SetData";

const App = () => {
  const { user } = useContext(UserContext);
  if (user === false) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <SetData>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/aportes"
            element={
              <RequireAuth>
                <Aportes />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/mantenedores"
            element={
              <RequireAuth>
                <Mantenedores />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/profesionales"
            element={
              <RequireAuth>
                <Profesionales />
              </RequireAuth>
            }
          ></Route>
        </Routes>
      </SetData>
    </>
  );
};

export default App;
