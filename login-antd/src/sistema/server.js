const SERVER = {
  ip: "http://192.168.100.9", // DIRECCIÓN IP DEL SERVIDOR
  puerto: "5000", // PUERTO DEL SERVIDOR
  sufijo: "/api",
  url: function (endpoint) {
    // FUNCION QUE RETORNA LA URL CON EL ENDPOINT ENVIADA COMO PARAMETRO
    return `${this.ip}:${this.puerto}${this.sufijo}${endpoint}`;
  },
  consulta: function (ruta, parametros = null, method = "POST") {
    const opciones = {};
    const endpoint = this.url(ruta);
    const headers = new Headers();
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");

    const controller = new AbortController();
    opciones.signal = controller.signal;
    opciones.method = method;
    opciones.headers = headers;
    opciones.body = parametros === null ? false : JSON.stringify(parametros);
    if (!opciones.body) delete opciones.body;
    setTimeout(() => controller.abort(), 3000);

    return fetch(endpoint, opciones)
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
              err: true,
              status: res.status || "00",
              mensaje: res.statusText || "Ocurrió un error",
            })
      )
      .catch((err) => err);
  },
};

const ENDPOINTS = {
  VERIFICAR: "/verificar",
  LOGIN: "/login",
};

export { ENDPOINTS };
export default SERVER;
