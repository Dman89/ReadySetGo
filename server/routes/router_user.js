const fs = require('fs');
const path = require('path');
const fileLocation = './users.json';

module.exports = function(app) {
	app.get('/user', function(req, res) {
		const users = readFile();
		console.log(users);
		return res.status(200).send({ users });
	});
	app.post('/user', function(req, res) {
		console.log(req);
		const users = req.users;
		saveFile(users);
		return res.status(200).send({ users });
	});
};

function saveToDB(json) {
	fs.writeFile(fileLocation, json, 'utf8', function(err) {
		if (err) {
			console.log(err);
		} else {
			console.log('JSON file has been saved.');
		}
	});
}

function readFromDB() {
	fs.readFile('users.json', function(err, data) {
		return JSON.parse(data);
	});
}

/* exported Function */
function saveFile(json) {
	const jsonString = JSON.stringify(json);
	saveToDB(jsonString);
}

function readFile() {
	const jsonData = readFromDB();
	return jsonData;
}
