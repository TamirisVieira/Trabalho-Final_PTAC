import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import api from '../services/api'

import './NewDetails.css'

function NewDetails() {
	let params = useParams()

	const [noticia, setNoticia] = useState([])

	useEffect(() => {
		api
			.get(`/noticias/visualizar?id=${params.idNoticia}`)
			.then(response => {
				setNoticia(response.data)
			})
			.catch(err => {
				console.log('Deu ruim: ', err)
			})
	}, [])

	return (
		<article>
			<div className="new-container">
				<div>

					<div><span className="autor">{noticia.autor}</span>
          </div>

					<span className="datapublicacao">{noticia.datapublicacao}</span>

				<div className="titulo">

					<h2>{noticia.titulo}</h2>
				</div>
			</div>

			<div className= "conteudo">
				{noticia.conteudo}
			</div>
      </div>

		</article>
	)
}

export default NewDetails