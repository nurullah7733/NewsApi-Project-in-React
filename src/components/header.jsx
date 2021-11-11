import React from "react";
import { newsCategroy } from "./news/news";

class Header extends React.Component {
  state = {
    searchValue: "",
  };

  handleChangeValue = (e) => {
    this.setState({ searchValue: e.target.value });
  };
  render() {
    const { category, handleSearch, handleChangeCategory } = this.props;
    return (
      <div className="my-4">
        <h1 className="mb-4" style={{ fontWeight: "300" }}>
          Block Buster Headlines
        </h1>
        <input
          type="search"
          className="form-control"
          placeholder="Type Anything & Press Enter to Search"
          onChange={this.handleChangeValue}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSearch(this.state.searchValue);
            }
          }}
        />
        <div className="my-4">
          {newsCategroy &&
            Object.keys(newsCategroy).map((item) => {
              if (category === newsCategroy[item]) {
                return (
                  <button
                    key={Math.random()}
                    className="btn btn-warning"
                  >{`#${newsCategroy[item]}`}</button>
                );
              }
              return (
                <button
                  key={Math.random()}
                  className="btn btn-outline"
                  onClick={() => {
                    handleChangeCategory(newsCategroy[item]);
                  }}
                >{`#${newsCategroy[item]}`}</button>
              );
            })}
        </div>
      </div>
    );
  }
}

export default Header;
