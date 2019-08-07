import * as React from "react";

export default class Button extends React.PureComponent {
  handleClick = () => {
    console.log("button click");
  };
  render() {
    return (
      <div className="lt-c-button" onClick={this.handleClick}>
        <button>{this.props.children}</button>
      </div>
    );
  }
}
