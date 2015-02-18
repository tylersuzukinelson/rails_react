var HelloWorld = React.createClass({

  doneCountdown: function() {
    alert('Countdown completed!');
  },

  getInitialState: function() {
    return {
      secondsStartFrom: 0
    }
  },

  updateSecondsStartFrom: function() {
    var input = this.refs.secondsInputEl.getDOMNode();
    this.setState({secondsStartFrom: parseInt(input.value)});
  },

  startCountdown: function(e) {
    e.preventDefault();
    this.setState({countdownVisible: true});
  },

  render: function() {
    var someVar = "This is text from a variable.";
    var pStyle = {
      fontSize: '24px',
      color: 'red'
    };

    var countdownEl;
    if (this.state.countdownVisible) {
      countdownEl = <Countdown start={this.state.secondsStartFrom} onComplete={this.doneCountdown} />
    }

    return (
        <div class="hello-world-component">
          {countdownEl}
          <form onSubmit={this.startCountdown}>
            <input type="text" defaultValue={this.state.secondsStartFrom} ref="secondsInputEl" onChange={this.updateSecondsStartFrom} />
          </form>
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
