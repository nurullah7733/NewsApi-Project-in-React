import React from "react";

class Pagination extends React.Component {
  state = {
    isEditable: false,
  };

  render() {
    const {
      nextPage,
      prevPage,
      isNext,
      isPrev,
      totalPage,
      currentPage,
      handleChange,
      goToPage,
    } = this.props;
    return (
      <div className="d-flex my-5 align-items-center">
        <button
          className="btn btn-warning"
          onClick={prevPage}
          disabled={!isPrev}
        >
          Previous
        </button>
        <div className="flex-grow-1 text-center">
          {this.state.isEditable ? (
            <input
              type="number"
              value={currentPage}
              onChange={(e) => handleChange(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  goToPage();
                  this.setState({ isEditable: false });
                }
              }}
            />
          ) : (
            <p
              style={{ userSelect: "none", lineHeight: "1.1" }}
              title="Double click to Jump Page"
              onDoubleClick={() => {
                this.setState({
                  isEditable: !this.state.isEditable,
                });
              }}
            >
              {currentPage} to {totalPage} <br />
              <small>Double Tap to Edit</small>
            </p>
          )}
        </div>

        <button
          onClick={() => nextPage()}
          disabled={!isNext}
          className="btn btn-warning ml-auto"
        >
          Next
        </button>
      </div>
    );
  }
}

export default Pagination;
