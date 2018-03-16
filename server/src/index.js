import express from 'express';
import server from './server';

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use('/*', server);

app.listen(3000, () => {
  console.log('Hello World listening on port 3000!');
});
