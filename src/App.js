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

  render() {
    console.log(this.state.data);
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <Header category={newsCategroy.technology} />
            <TotalPageResult
              totalResult={this.state.data.totalResult}
              totalPage={this.state.data.totalPage}
              currentPage={this.state.data.currentPage}
            />

            {this.state.isLoading ? (
              <Loading />
            ) : (
              <div>
                <NewsList allNews={this.state.data.article} />
                <Pagination />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
