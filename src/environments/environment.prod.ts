const settings = require('../../settings');
const apiPort = settings.app.port;

export const environment = {
  production: true,
  apiUrl: "http://localhost:" + apiPort
};
