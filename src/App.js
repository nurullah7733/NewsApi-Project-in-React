import React from "react";
import Header from "./components/header";
import News, { newsCategroy } from "./components/news/news";
import Loading from "./components/loading";
import TotalPageResult from "./components/totalPageResult";
import NewsList from "./components/newsList";
import Pagination from "./components/pagination";

const news = new News(newsCategroy.technology);

class App extends React.Component {
  state = {
    data: [],
    isLoading: true,
  };
  componentDidMount() {
    news
      .getNews()
      .then((data) => this.setState({ data, isLoading: false }))
      .catch((e) => {
        this.setState({ isLoading: false });
        console.log(e, "Error from app.js");
      });
  }
  // search fn Implement

  handleSearch = (value) => {
    this.setState({ isLoading: true });

    news
      .search(value)
      .then((data) => this.setState({ data, isLoading: false }))
      .catch();
  };

  // Next pagee function Implement.
  nextPage = () => {
    if (this.state.data.isNext) {
      this.setState({ isLoading: true });
    }
    news
      .next()
      .then((data) => {
        this.setState({ data, isLoading: false });
      })
      .catch((e) => {
        this.setState({ isLoading: false });
        console.log(e);
        alert("Next page not reachebled");
      });
  };

  // Previous pagee function Implement.
  prevPage = () => {
    if (this.state.data.isPrev) {
      this.setState({ isLoading: true });
    }
    news
      .prev()
      .then((data) => {
        this.setState({ data, isLoading: false });
      })
      .catch((e) => {
        this.setState({ isLoading: false });
        console.log(e);
        alert("Previous page not reachebled");
      });
  };

  // Jump Page Implement

  handleChange = (value) => {
    this.setState({ data: { ...this.state.data, currentPage: value } });
  };

  goToPage = () => {
    this.setState({ isLoading: true });
    news
      .setCurrentPage(this.state.data.currentPage)
      .then((data) => {
        this.setState({ data, isLoading: false });
      })
      .catch((e) => {
        console.log(e);
        alert("Jump to go to page Loading failed");
        this.setState({ isLoading: false });
      });
  };
  render() {
    const { totalResult, totalPage, currentPage, article, isNext, isPrev } =
      this.state.data;
    console.log(this.state.data);
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <Header
              category={newsCategroy.technology}
              handleSearch={this.handleSearch}
            />
            <TotalPageResult
              totalResult={totalResult}
              totalPage={totalPage}
              currentPage={currentPage}
            />

            {this.state.isLoading ? (
              <Loading />
            ) : (
              <div>
                <NewsList allNews={article} />
                <Pagination
                  goToPage={this.goToPage}
                  handleChange={this.handleChange}
                  totalPage={totalPage}
                  currentPage={currentPage}
                  nextPage={this.nextPage}
                  prevPage={this.prevPage}
                  isNext={isNext}
                  isPrev={isPrev}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
