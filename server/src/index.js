import http from 'http';
import app from './Server';

app.set('view engine', 'ejs');

const server = http.createServer(app);
let currentApp = app;
server.listen(8081);

if (module.hot) {
  module.hot.accept('./Server', () => {
    server.removeListener('request', currentApp);
    server.on('request', app);
    currentApp = app;
  });
}
