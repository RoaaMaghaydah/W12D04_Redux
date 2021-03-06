const express = require('express');
require('dotenv').config();
const cors = require('cors');
require('./db/db');

//routers
const articlesRouter = require('./routers/routes/articles');
const usersRouter = require('./routers/routes/users');
const authRouter = require('./routers/routes/auth');
const commentsRouter = require('./routers/routes/comments');
const roleRouter = require('./routers/routes/role');

const app = express();

//built-in middleware
app.use(express.json());
app.use(cors());

// router middleware
app.use( usersRouter);
app.use('/articles', articlesRouter);
app.use(authRouter);
app.use(commentsRouter);
app.use(roleRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`server on ${PORT}`);
});
