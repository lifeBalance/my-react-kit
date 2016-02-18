# My react kit
Just a build kit for playing with React. It uses Gulp as a task manager and includes:

* Browserify for bundling up the code.
* Watchify for incremental builds.
* Babel for transpiling JSX and ES6.
* BrowserSync as a development server, proxying a Express server.
* Bootstrap-Sass (jQuery is included also).
* Gulp-nodemon for taking care of the scripts in the backend.
* Require-dir for splitting the Gulp tasks in separate files.

> Note: This is a Work In Progress.

## TODO
- [ ] Inject the bundled scripts without full reload. (Apparently we don't need **Webpack** to do this, **Browserify** can do it, but I can't find much information about it)

## Usage
Clone it:
```
$ git clone https://github.com/lifeBalance/my-react-kit.git your-react-project
```

Install it:
```
$ cd your-react-project && npm install
```

And start the thing:
```
$ npm start
```
