import React from 'react'
import { Link } from 'react-router-dom';

import './CardNews.css'

function CardNoticia(props) {
	return (
		<div className="card-container">
			<Link id = "link" to={props.idNoticia} className="title">
				<h2>{props.titulo}</h2>
			</Link>
		</div>
	)
}

export default CardNoticia