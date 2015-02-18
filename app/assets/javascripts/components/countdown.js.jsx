var Countdown = React.createClass({

  getInitialState: function() {
    return {
      secondsRemaining: this.props.start
    }
  },

  componentDidMount: function() {
    var self = this;
    this.counter = setInterval(function() {
      if (self.state.secondsRemaining > 0) {
        self.setState({secondsRemaining: self.state.secondsRemaining - 1});
      } else {
        clearInterval(self.counter);
      }
    }, 1000)
  },

  render: function() {
    return <div>{this.state.secondsRemaining} seconds remaining</div>;
  }
});
