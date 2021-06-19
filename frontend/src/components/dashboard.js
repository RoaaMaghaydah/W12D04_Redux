import React, { useContext, useEffect, useState } from 'react';
import { setArticles, updateArticles } from './../reducer/article/index';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const Dashboard = () => {
	const dispatch = useDispatch();
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const state = useSelector((state) => {
		return {
			articals: state.articles.articles
		};
	});

	const getAllArticles = () => {

		axios.get(`http://localhost:5000/articles/`)
			.then((response) => {

				dispatch(setArticles(response.data));

			})
			.catch((err) => {
				console.log('ERR: ', err);
			});
	};
	useEffect(() => {
		getAllArticles();
	}, []);

	const updateArtical = (id) => {
		const newA = { title, description };
		axios.put(`http://localhost:5000/articles/${id}`, newA)
			.then((result) => {		
				dispatch(updateArticles(result.data[0].id));
			})
			.catch((err) => {
				console.log("rrrrrrrrrrr", err);
			});
	}

	return (
		<>
			{state.articals && state.articals.map((elem, i) => <><div className="addArt" key={i}>
				<p>-----------------------------------------------------------</p>
				title:<p className="addArt1"> {elem.title}</p>
				description: <p className="addArt2">{elem.description}</p>


				<p>_______update_____________</p>
				<input className="newArticleInput" type="text" placeholder="Title here" onChange={(e) => {
					setTitle(e.target.value);
				}} />
				<input className="newArticleInput_1" type="text" placeholder="description" onChange={(e) => {
					setDescription(e.target.value);
				}} />
				<button onClick={() => { updateArtical(elem.id) }}>update</button>

				<p>_______update_____________</p>


			</div>
			</>)}
		</>
	);
}

export default Dashboard;
