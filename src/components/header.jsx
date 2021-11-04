import React from "react";
import { newsCategroy } from "./news/news";

class Header extends React.Component {
  render() {
    const { category } = this.props;
    return (
      <div className="my-4">
        <h1 className="mb-4" style={{ fontWeight: "300" }}>
          Block Buster Headlines
        </h1>
        <input
          type="search"
          className="form-control"
          placeholder="Type Anything & Press Enter to Search"
        />
        <div className="my-4">
          {newsCategroy &&
            Object.keys(newsCategroy).map((item) => {
              if (category === newsCategroy[item]) {
                return (
                  <button className="btn btn-warning">{`#${newsCategroy[item]}`}</button>
                );
              }
              return (
                <button className="btn btn-outline">{`#${newsCategroy[item]}`}</button>
              );
            })}
        </div>
      </div>
    );
  }
}

export default Header;
