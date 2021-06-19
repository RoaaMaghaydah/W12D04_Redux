import React, { useState } from 'react';
import { createArticles } from './../reducer/article/index';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';


const NewArticle = () => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const dispatch = useDispatch();
	const state = useSelector((state) => {
		return {
			articals: state.articles.articles
		};
	});

	const newArticles = () => {
		const newArt = { title, description };
		axios.post(`http://localhost:5000/articles`, newArt)

			.then((response) => {
				console.log("resss  ",response.data)


			})
			.catch((err) => {

				console.log("error")
			})

	};

	return (
		<>
			<div className="Deshboard">
				<h4 style={{ margin: "10px" }}>  Add New Article </h4>
				<input className="newArticleInput" type="text" placeholder="Title here" onChange={(e) => {
					setTitle(e.target.value);
				}} />
				<input className="newArticleInput_1" type="text" placeholder="description" onChange={(e) => {
					setDescription(e.target.value);
				}} />
				<button className="newArticleButton" onClick={newArticles}>Create New Artical</button>
			</div>
		</>
	);
};

export default NewArticle;
