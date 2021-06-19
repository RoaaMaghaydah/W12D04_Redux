import React, { useContext, useEffect } from 'react';
import { setArticles } from './../reducer/article/index';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const Dashboard = () => {
	const dispatch = useDispatch();
	const state = useSelector((state) => {
		return {
			articals: state.articles.articles
		};
	});

	const getAllArticles = () => {

		axios.get(`http://localhost:5000/articles/`)
			.then((response) => {
				console.log(response.data);
				dispatch(setArticles(response.data));
              //console.log("hiiii :  ",state.articals[0].title)
			})
			.catch((err) => {
				console.log('ERR: ', err);
			});
	};
	useEffect(() => {
		getAllArticles();
	}, []);

	return (
		<>
			{ state.articals&& state.articals.map((elem, i) => <><div className="addArt" key={i}>
			<p>-----------------------------------------------------------</p>
                    title:<p className="addArt1"> {elem.title}</p>
				    description: <p className="addArt2">{elem.description}</p>
					<p>-----------------------------------------------------------</p>
                    
                </div>
                </>)}
		</>
	);
}

export default Dashboard;
