var HelloWorldMessage = React.createClass({

  propTypes: {
    text: React.PropTypes.string
  },

  render: function() {
    var extra;
    if (this.props.type === 'important') {
      extra = <strong>This is important!</strong>
    } else {
      extra = <div />
    }
    return (
        <div class="hello-world-message">
          {extra}
          <p>{this.props.text}</p>
          <AnotherOne />
        </div>
      );
  }
});
