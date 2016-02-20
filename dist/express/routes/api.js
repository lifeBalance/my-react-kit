module.exports = function (app) {
  var items = [
    {
      name: 'This is an AP'
    },
    {
      name: 'Change me to see if the browser reloads.'
    },
    {
      name: "Does it work"
    },
  ];
  app.route('/api/testing')
    .get(function (req, res) {
      res.send(items);
    });
}
