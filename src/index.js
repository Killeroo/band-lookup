import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function clock() {
	// Define our element
	const element = (
		<div>
			<p>The time is {new Date().toLocaleTimeString()}.</p>
		</div>
	)
	// Render in DOM
	ReactDOM.render(
		element,
		document.getElementById('clock')
	)
}

setInterval(clock, 1000);
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();