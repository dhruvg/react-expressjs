import http from 'http';
import app from './server';

app.set('view engine', 'ejs');

const server = http.createServer(app);
let currentApp = app;
server.listen(3000);

if (module.hot) {
  module.hot.accept('./server', () => {
    server.removeListener('request', currentApp);
    server.on('request', app);
    currentApp = app;
  });
}
