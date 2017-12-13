const settings = require('../../settings');
const apiPort = settings.app.port;

export const environment = {
  production: false,
  apiUrl: "http://localhost:" + apiPort
};
