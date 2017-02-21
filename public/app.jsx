var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('./components/Greeter');



var firstName = 'Ken';
var message = 'This is a paragraph from a React component!'
ReactDOM.render(
    <Greeter name={firstName} message={message}/>,
    document.getElementById('app')
);