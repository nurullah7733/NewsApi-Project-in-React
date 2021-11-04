import React from "react";
import Header from "./components/header";
import { newsCategroy } from "./components/news/news";
import Loading from "./components/loading";
import TotalResult from "./components/totalPageResult";
import NewsList from "./components/newsList";
import Pagination from "./components/pagination";

const news = [
  {
    url: "www.google.com",
    urlToImage: "/1.jpg",
    title: "Bangladesh 1",
    content: "Bangladesh is the most import categories in the world to .",

    publishedAt: "Published Data and Time",
    source: {
      name: "BBC",
    },
  },
  {
    url: "www.google.com",
    urlToImage: "/2.jpg",
    title: "Bangladesh 2",
    content: "Bangladesh is the most import categories in the world to 22 .",

    publishedAt: "Published Data and Time",
    source: {
      name: "CNN",
    },
  },
];

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <Header category={newsCategroy.technology} />
            <TotalResult />
            <Loading />
            <NewsList allNews={news} />
            <Pagination />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
