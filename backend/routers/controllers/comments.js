const db = require('./../../db/db');


const createNewComment = (req, res) => {
	const articleId = req.params.id;
	const article_id= articleId
	const { comment,commenter_id } = req.body;
	const query = `INSERT INTO comments ( comment, article_id,commenter_id) VALUES (?,?,?)`;
	const data = [ comment, article_id, commenter_id];
	db.query(query, data, (err, results) => {
		if (err) {
			console.log(err)
		}
		console.log(results);
		res.json(results)
	});

};

module.exports = {
	createNewComment,
};
