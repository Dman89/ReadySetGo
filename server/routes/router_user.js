const fs = require('fs');
const path = require('path');
const fileLocation = path.join('./server/routes/users.json');

module.exports = function(app) {
	app.get('/users', function(req, res) {
		const { users } = readFile();
		res.status(200).send({ users });
	});
	app.post('/users', function(req, res) {
		const users = req.users;
		saveFile(users);
		return res.status(200);
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

/* exported Function */
function saveFile(json) {
	const jsonString = JSON.stringify(json);
	saveToDB(jsonString);
}

function readFile() {
	const rawData = fs.readFileSync(fileLocation);
	const users = JSON.parse(rawData);
	return users;
}
