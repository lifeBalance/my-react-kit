module.exports = {
  serve: {
    port: 8080,
    express: "localhost:3000"
  },
  scripts: {
    entryPoint:   './src/js/main.jsx',
    sources:      './src/js/**/*.jsx',
    destination:  './dist/public/js'
  },
  styles: {
    sources:      './src/sass/**/*.scss',
    destination:  './dist/public/css'
  },
  fonts: {
    source:       './node_modules/bootstrap-sass/assets/fonts/bootstrap/**.*',
    destination:  './dist/public/fonts/bootstrap'
  }
};
