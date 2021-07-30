import { createContext, useEffect, useState } from "react";
import Usuarios from "../modelos/Usuarios";
import SERVER, { ENDPOINTS } from "../sistema/server";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(Usuarios);
  const [loadingBoton, setLoadingBoton] = useState(false);
  const [conexionApi, setConexionApi] = useState(false);

  useEffect(() => {
    // comprobar si existe conexión con el api
    const verificarConexionApi = async () => {
      await SERVER.consulta(ENDPOINTS.VERIFICAR, null, "GET");

      setConexionApi(true);
    };
    verificarConexionApi();
  }, []);

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

  const data = { usuario, setLogin, conexionApi, loadingBoton, clickLogin };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
export default AuthContext;
