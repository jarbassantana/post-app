import { Component } from "react";
import './styles.css';

export class Button extends Component {
  

  render() {
    const { text, onClick, disabled } = this.props;
    return (
      <div className="btn-container">
        <button
          disabled={disabled}
          onClick={onClick}
        >{text}</button>
      </div>
    );
  }
}
