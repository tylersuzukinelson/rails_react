var HelloWorldMessage = React.createClass({

  propTypes: {
    text: React.PropTypes.string
  },

  render: function() {
    return (
        <p>{this.props.text}</p>
      );
  }
});
