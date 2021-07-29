import { createContext, useState } from "react";
import Usuarios from "../modelos/Usuarios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(Usuarios);
  const [loadingBoton, setLoadingBoton] = useState(false);
  const setLogin = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };
  const clickLogin = (e) => {
    console.log(e);
    setLoadingBoton(true);
  };

  const data = { usuario, setLogin, loadingBoton, clickLogin };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
export default AuthContext;
