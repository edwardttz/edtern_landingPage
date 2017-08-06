const React = require('react');

module.exports = () => React.createElement('div', {
	onClick() {
		window.alert('clicked');
	}
}, '<h1> OMG THIS IS WORKING </h1>');
