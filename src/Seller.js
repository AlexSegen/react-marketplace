import React, { Component } from "react";

export default class Seller extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <p> {this.props.description}</p>
        <p> Rating: {this.props.rating}</p>
        <img src={this.props.image} alt={this.props.name} />
      </div>
    );
  }
}
