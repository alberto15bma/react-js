import React, { useState } from "react";
import { Input, Button, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Usuarios from "../../modelos/Usuarios";
import "./estilos.scss";

function Login() {
  const [usuario, setUsuario] = useState(Usuarios);

  const cambiarValores = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
    console.log(usuario);
  };

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
            onChange={cambiarValores}
          />
        </div>
        <div className="login-input">
          <Input.Password
            name="password"
            placeholder="Contraseña"
            width={"100%"}
            value={usuario.password}
            onChange={cambiarValores}
          />
        </div>
        <div className="login-boton">
          <Button type="primary" width={"100%"} block={true}>
            Entrar
          </Button>
        </div>
      </div>
      <div className="login-formulario texto-centro">
        Power By Alberto Arias
      </div>
    </div>
  );
}

export default Login;
