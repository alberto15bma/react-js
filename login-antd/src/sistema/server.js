const SERVER = {
  ip: "http://192.168.100.9", // DIRECCIÓN IP DEL SERVIDOR
  puerto: "5000", // PUERTO DEL SERVIDOR
  sufijo: "/api",
  url: function (endpoint) {
    // FUNCION QUE RETORNA LA URL CON EL ENDPOINT ENVIADA COMO PARAMETRO
    return `${this.ip}:${this.puerto}${this.sufijo}${endpoint}`;
  },
};

const ENDPOINTS = {
  LOGIN: "/login",
};

export { ENDPOINTS };
export default SERVER;
