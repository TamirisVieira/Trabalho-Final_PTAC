import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import News from './components/News'
import NewDetails from './components/NewDetails'
import './App.css';

function App() {
	return (
		<BrowserRouter>
    <div id="cabecalho"> <h1> Noticias </h1> </div>
    <div>
			<div className='grid-container'>
				<Routes>
					<Route path='/' element={<News />} />
						<Route path=':idNoticia' element={<NewDetails />} />
				</Routes>
			</div>
      </div>
		</BrowserRouter>

	);
}

export default App;