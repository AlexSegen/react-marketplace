import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";
import { items, sellers } from "./Data";
import Item from "./Item";
import Seller from "./Seller";

const renderAllItems = () => {
  return (
    <div className="card-deck">
      {items.map(x => (
        <Item key={x.name} item={x} />
      ))}
    </div>
  );
};
const renderSeller = routeData => {
  const sellerId = routeData.match.params.sellerId;
  const candidates = sellers.filter(x => x.id === sellerId);
  if (candidates.length > 0) {
    const seller = candidates[0];
    return (
      <div>
        <Seller
          name={seller.name}
          rating={seller.rating}
          description={seller.description}
          image={seller.image}
        />
        <hr />
        <Link to="/">Back to list</Link>
      </div>
    );
  } else {
    return (
      <div>
        {" "}
        <h2>Seller Not Found. </h2>
        <Link to="/">Back to home</Link>
      </div>
    );
  }

  // return <Seller info={seller} />;
};
export default class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Marketplace</h1>
        <BrowserRouter>
          <Route path="/seller/:sellerId" render={renderSeller}></Route>
          <Route exact={true} path="/" render={renderAllItems}></Route>
        </BrowserRouter>
      </div>
    );
  }
}
