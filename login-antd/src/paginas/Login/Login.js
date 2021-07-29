import React, { useContext, useState } from "react";
import { Input, Button, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import AuthContext from "../../context/AuthContext";
import "./estilos.scss";

function Login() {
  const { usuario, setLogin, loadingBoton, clickLogin } =
    useContext(AuthContext);

  return (
    <div className="login-contenedor">
      <div className="login-formulario">
        <div className="login-titulo">Login</div>
        <div className="login-logo">
          <Avatar size={64} icon={<UserOutlined />} />
        </div>
        <div className="login-input">
          <Input
            name="usuario"
            placeholder="Usuario"
            width={"100%"}
            value={usuario.usuario}
            onChange={setLogin}
          />
        </div>
        <div className="login-input">
          <Input.Password
            name="password"
            placeholder="Contraseña"
            width={"100%"}
            value={usuario.password}
            onChange={setLogin}
          />
        </div>
        <div className="login-boton">
          <Button
            type="primary"
            width={"100%"}
            block={true}
            loading={loadingBoton}
            onClick={clickLogin}
          >
            Entrar
          </Button>
        </div>
      </div>
      <div className="login-formulario texto-centro texto-negrita">
        Power By Alberto Arias
      </div>
    </div>
  );
}

export default Login;
