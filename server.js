require('dotenv').config({ silent: true });

const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const http = require('http');
const moment = require('moment-timezone');
moment.tz.setDefault('UTC');
const serialize = require('serialize-javascript');

app.use('/public', express.static(path.join(__dirname, 'public')));

// app.use('/dist', express.static(path.join(__dirname, 'dist')));

let events = [
	{ desc: 'Random event 1', date: moment('2018-04-29', 'YYYY-MM_DD') },
	{ desc: 'Random event 2', date: moment('2018-04-30', 'YYYY-MM_DD') },
	{ desc: 'Random event 3', date: moment('2018-05-01', 'YYYY-MM_DD') }
];

app.get('/', (req, res) => {
  let template = fs.readFileSync(path.resolve('./index.html'), 'utf-8');
  let contentMarker = '<!-- App -->';
  res.send(template.replace(contentMarker, `<script>var __INITIAL_STATE__ = ${ serialize(events) }</script>`));
});

app.use(require('body-parser').json());
app.post('/add_event', (req, res) => {
	// console.log('Received');
	// console.log(req.body);
	events.push(req.body);
	res.sendStatus(200);
});

const server = http.createServer(app);

if (process.env.NODE_ENV === 'development') {
  const reload = require('reload');
  const reloadServer = reload(server, app);
  require('./webpack-dev-middleware').init(app);
}

server.listen(process.env.PORT, function () {
  console.log(`Example app listening on port ${process.env.PORT}!`);
  if (process.env.NODE_ENV === 'development') {
    require("open")(`http://localhost:${process.env.PORT}`);
  }
});
