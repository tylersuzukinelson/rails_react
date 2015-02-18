var HelloWorldMessage = React.createClass({

  propTypes: {
    text: React.PropTypes.string
  },

  render: function() {
    return (
        <div class="hello-world-message">
          <p>{this.props.text}</p>
          <AnotherOne />
        </div>
      );
  }
});
