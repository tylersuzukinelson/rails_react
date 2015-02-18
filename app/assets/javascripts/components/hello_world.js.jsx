var HelloWorld = React.createClass({

  render: function() {
    var someVar = "This is text from a variable.";
    var pStyle = {
      fontSize: '24px',
      color: 'red'
    };
    return (
        <div class="hello-world-component">
          <h1>Hello World!</h1>
          <p style={pStyle}>{someVar}</p>
          <HelloWorldMessage text="This is a test message" />
          <HelloWorldMessage text="So is this." />
          <HelloWorldMessage text="And another one" />
          <AnotherOne dingaling="dong" />
        </div>
      );
  }
});
