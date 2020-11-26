import React from "react";

import Button from "./Components/Button.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: 0,
      saved: undefined,
      operation: undefined,
    };
  }

  concatNumberToScreen = (number) => {
    if (this.state.screen === 0) {
      this.setState((state) => {
        return {
          screen: number,
        };
      });
    } else {
      this.setState((state) => {
        return {
          screen: parseInt("" + state.screen + number),
        };
      });
    }
  };

  add = () => {
    this.setState((state) => {
      return {
        screen: 0,
        saved: state.screen,
        operation: "add",
      };
    });
  };
  substract = () => {
    this.setState((state) => {
      return {
        screen: 0,
        saved: state.screen,
        operation: "substract",
      };
    });
  };
  multiply = () => {
    this.setState((state) => {
      return {
        screen: 0,
        saved: state.screen,
        operation: "multiply",
      };
    });
  };
  divide = () => {
    this.setState((state) => {
      return {
        screen: 0,
        saved: state.screen,
        operation: "divide",
      };
    });
  };

  clear = () => {
    this.setState((state) => {
      return {
        screen: 0,
        saved: undefined,
        operation: undefined,
      };
    });
  };

  solution = () => {
    this.setState((state) => {
      switch (state.operation) {
        case "add":
          return {
            screen: state.screen + state.saved,
          };
        case "substract":
          return {
            screen: state.saved - state.screen,
          };
        case "multiply":
          return {
            screen: state.screen * state.saved,
          };
        case "divide":
          return {
            screen: state.saved / state.screen,
          };
        default:
          return {};
      }
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.screen}</div>
        <div>
          <Button text="1" handler={() => this.concatNumberToScreen(1)} />
          <Button text="2" handler={() => this.concatNumberToScreen(2)} />
          <Button text="3" handler={() => this.concatNumberToScreen(3)} />
        </div>
        <div>
          <Button text="4" handler={() => this.concatNumberToScreen(4)} />
          <Button text="5" handler={() => this.concatNumberToScreen(5)} />
          <Button text="6" handler={() => this.concatNumberToScreen(6)} />
        </div>
        <div>
          <Button text="7" handler={() => this.concatNumberToScreen(7)} />
          <Button text="8" handler={() => this.concatNumberToScreen(8)} />
          <Button text="9" handler={() => this.concatNumberToScreen(9)} />
          <Button text="0" handler={() => this.concatNumberToScreen(0)} />
        </div>
        <div>
          <Button text="+" handler={this.add} />
          <Button text="-" handler={this.substract} />
          <Button text="/" handler={this.divide} />
          <Button text="*" handler={this.multiply} />
        </div>
        <div>
          <Button text="clear" handler={this.clear} />
          <Button text="=" handler={this.solution} />
        </div>
      </div>
    );
  }
}

export default App;
