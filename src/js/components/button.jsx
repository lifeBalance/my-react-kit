var React = require('react');

var Button = React.createClass({
  propTypes: {
    href:     React.PropTypes.string.isRequired,
    size:     React.PropTypes.string.isRequired,
    type:     React.PropTypes.string.isRequired,
    content:  React.PropTypes.string.isRequired
  },

  render: function () {
    return (
      <a  className={'btn btn-' + this.props.type + ' btn-' + this.props.size}
          href={this.props.href}
          target="_blank"
          role="button">{this.props.content}</a>
    );
  }
});

module.exports = Button;
