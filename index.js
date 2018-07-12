const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
//const morgan = require('morgan');
const app = express();
const router = require('./server/routes/router_user');
//onst cors = require('cors');
//app.use(morgan('combined'));
//app.use(cors()); // Allows CORS(Cross Origin GET Request)
app.use(bodyParser.json({ type: '*/*' }));
app.use('/', express.static('build'));
router(app);

const port = process.env.PORT || 3000;

app.listen(port, function() {
	console.log('Server Listening on localhost:' + port);
});

module.exports = app;
