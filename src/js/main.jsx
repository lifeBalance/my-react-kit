// Bootstrap
window.$ = window.jQuery = require('jquery');
var bootstrapJS = require('bootstrap-sass'); // Bootstrap JavaScripts.

var React     = require('react');
var ReactDOM  = require('react-dom');
var Foo       = require('./components/foo');

ReactDOM.render(<Foo/>, document.getElementById('root'));
