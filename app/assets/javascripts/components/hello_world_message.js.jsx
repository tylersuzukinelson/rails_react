var HelloWorldMessage = React.createClass({

  propTypes: {
    text: React.PropTypes.string.isRequired
  },

  render: function() {
    return (
        <p>{this.props.text}</p>
      );
  }
});
