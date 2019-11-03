import React, { Component } from "react";

import { Link } from "react-router-dom";
export default class Item extends Component {
  render() {
    return (
      <div className="card text-center">
        <img
          src={this.props.item.image}
          className="card-img-top"
          alt={this.props.item.name}
        />
        <div className="card-body">
          <h4 className="card-title">{this.props.item.name}</h4>
          <p className="card-text">{this.props.item.description}</p>
          <p className="card-text">
            <Link to={"/seller/" + this.props.item.sellerId}>
              Seller {this.props.item.sellerId}
            </Link>
          </p>
        </div>
        <div className="card-footer">
          <button className="btn btn-primary">Add to cart</button>
          <h5>${this.props.item.price}</h5>
        </div>
      </div>
    );
  }
}
