var React   = require('react');

// Some child components
var Button  = require('./button');
var Alert   = require('./alert');

// A top level component.
var Foo = React.createClass({
  render: function() {
    return (
      <div className='container'>
        <div className="jumbotron">
          <h1>My React Kit</h1>
          <p>A small simple kit to start playing with React.</p>
          <ul>
            <li>React, React-DOM, React-Router, Flux</li>
            <li>Gulp, Watchify, BrowserSync, Babel</li>
            <li>Bootstrap-sass, jQuery</li>
            <li>Source Maps, and more...</li>
          </ul>
          <p>Check the <code>package.json</code> file to find out about versions.</p>

          <Button size='lg' type='primary' content='Learn React' href='https://facebook.github.io/react/docs/getting-started.html'/>
        </div>

        <Alert  message='If you can dismiss me, the Bootstrap scripts are working!'
                type='warning' />
      </div>
    );
  }
});

module.exports = Foo;
