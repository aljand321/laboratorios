

import http from 'http'
import express from 'express'
import logger from 'morgan';
import bodyParser from 'body-parser';
import routes from './server/routes';
import { pathToFileURL } from 'url';

const path  = require('path');
const multer = require('multer');

const hostname = '127.0.0.1';
const port = 3050;
const app = express()
const server = http.createServer(app);






app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
routes(app);

app.use(multer({
  dest: path.join(__dirname, 'public/img')
}).single('image'));


app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the .',
}));
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});