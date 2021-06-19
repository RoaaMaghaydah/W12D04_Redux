const db = require('./../../db/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// const authenticateBasic =async(email, password) => {
// 	 const query = `SELECT * FROM users WHERE email=?`
// 	const data = [email];
// 	let finalR=[];
//  	 db.query(query, data, async (err, results) => {
// 		if (err) {
// 			console.log(err)
// 			console.log("no email")
// 		}
// 		console.log("r", results[0].password)
// 		if (results[0]) {
// 			const valid = await bcrypt.compare(password, results[0].password);
// 			if (valid) {
// 				const payload = {
// 					firstName: results[0].firstName,
// 					lastName: results[0].lastName,
// 					role: results[0].id,
// 				};

// 				console.log("paylod", payload, process.env.SECRET)
// 				const options = {
// 					expiresIn: '60m',
// 				};
// 				console.log("paylod", payload, process.env.SECRET, options)

// 				finalR.push([jwt.sign(payload, process.env.SECRET, options), 200]);
// 			}
// 		}
// 		        finalR = ['The password you’ve entered is incorrect', 403];

// 		})
//          	return finalR[0]

// };


const login = async (req, res) => {
	const { email, password } = req.body;
	console.log("email", email, "password", password)
	// 
	const query = `SELECT * FROM users WHERE email=?`
	const data = [email];
	db.query(query, data, async (err, results) => {
		if (err) {
			console.log(err)
			console.log("no email")
		}
		console.log("r", results[0].password)
		if (results[0]) {
			const valid = await bcrypt.compare(password, results[0].password);
			if (valid) {
				const payload = {
					firstName: results[0].firstName,
					lastName: results[0].lastName,
					role: results[0].id,
				};

				console.log("paylod", payload, process.env.SECRET)
				const options = {
					expiresIn: '60m',
				};
				console.log("paylod", payload, process.env.SECRET, options)
				const arr1= [jwt.sign(payload, process.env.SECRET, options), 200];
				res.json(arr1[0]);
			}
		}
		res.json(['The password you’ve entered is incorrect', 403]);
        
	})

};
module.exports = {
	login,
};
