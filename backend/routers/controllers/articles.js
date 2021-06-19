const db = require('./../../db/db');

const getAllArticles = (req, res) => {
	const query = `SELECT * FROM articles WHERE is_deleted=0`;
	db.query(query, (err, result) => {
		if (err) throw err;
		console.log('RESULT: ', result);
		res.json(result)
	});
};

const getArticlesByAuthor = (req, res) => {
	const auth = req.query.author;
	const query = `SELECT articles.title, articles.description,articles.id  FROM  articles
	INNER JOIN  users ON users.id=author_id`;
	db.query(query, (err, result) => {
		const arr = []
		if (err) throw err;
		res.json(result)
	});
};

const getAnArticleById = (req, res) => {
	const id = req.params.id;
	const query = `SELECT users.firstName ,users.id ,articles.title, articles.description,articles.id FROM  articles
	INNER JOIN  users ON articles.id=${id} AND users.id=author_id`;
	db.query(query, (err, result) => {
		const arr = []
		if (err) throw err;
		res.json(result)
	});

};

const createNewArticle = (req, res) => {
	const { title, description, author_id } = req.body;
	const query = `INSERT INTO articles (title, description,author_id ) VALUES (?,?,?)`;
	const data = [title, description, author_id];
	db.query(query, data, (err, results) => {
		console.log(results);
		res.json(results)
	});

};

const updateAnArticleById = (req, res) => {
	const id = req.params.id;
	const { title, description } = req.body;
	const query = `UPDATE articles
    SET title=?, description = ?
    WHERE id=${id}`;
	const data = [title, description];
	db.query(query, data, (err, results) => {
		console.log(results);
		res.json(results)
	});
};



const deleteArticleById = (req, res) => {
	const id = req.params.id;
	const query = `DELETE FROM articles WHERE id=${id}`;
	db.query(query, (err, results) => {
		console.log(results);
		res.json(results)
	});
};

const deleteArticlesByAuthor = (req, res) => {
	const auth = req.query.author;
	const query = `UPDATE articles
   SET is_deteted=1
   WHERE  id=?`;
	const arr = [auth]
	db.query(query, arr, (err, result) => {
		if (err) throw err;
		console.log("roaa", result)
		res.json(result);
	});

};

module.exports = {
	getAllArticles,
	getArticlesByAuthor,
	getAnArticleById,
	createNewArticle,
	updateAnArticleById,
	deleteArticleById,
	deleteArticlesByAuthor,
};
