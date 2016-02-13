var React = require('react');

var Alert = React.createClass({
  propTypes: {
    message: React.PropTypes.string.isRequired,
    type: React.PropTypes.string.isRequired
  },
  render: function () {
    return (
      <div className={'alert alert-dismissible alert-' + this.props.type} role="alert">
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>

        <strong>Success!</strong>{this.props.message}
      </div>
    );
  }
});

module.exports = Alert;
