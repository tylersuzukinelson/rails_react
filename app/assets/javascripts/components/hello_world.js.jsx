var HelloWorld = React.createClass({

  render: function() {
    var someVar = "This is text from a variable.";
    return (
        <div class="hello-world-component">
          <h1>Hello World!</h1>
          <p>{someVar}</p>
          <p>{this.props.message}</p>
        </div>
      );
  }
});
