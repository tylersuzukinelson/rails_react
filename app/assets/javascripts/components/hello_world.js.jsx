var HelloWorld = React.createClass({

  doneCountdown: function() {
    alert('Countdown completed!');
  },

  render: function() {
    var someVar = "This is text from a variable.";
    var pStyle = {
      fontSize: '24px',
      color: 'red'
    };
    return (
        <div class="hello-world-component">
          <Countdown start={5} onComplete={this.doneCountdown} />
          <h1>Hello World!</h1>
          <p style={pStyle}>{someVar}</p>
          <HelloWorldMessage type="important" text="This is a test message" />
          <HelloWorldMessage text="So is this." />
          <HelloWorldMessage text="And another one" />
          <AnotherOne dingaling="dong" />
        </div>
      );
  }
});
