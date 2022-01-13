import axios from "axios";

export const newsCategroy = {
  technology: "technology",
  business: "business",
  sport: "sport",
  entertainment: "entertainment",
  general: "general",
  health: "health",
  science: "science",
};

const pageMaxSize = 10;

export default class News {
  constructor(category) {
    this._country = "us";
    this._category = category;
    this._currentPage = 1;
    this._pagesize = pageMaxSize;
    this._searchTerm = "";
    this._totalPage = 1;
  }

  async getNews() {
    try {
//       const { data } = await axios.get(this._getUrl());
       const { data } = await axios.get(
        `https://newsapi.org/v2/top-headlines?apiKey=9daa86ed54de49a89d185777f0a82732&${this._getUrl()}`
      );
      this._totalPage = Math.ceil(data.totalResults / this._pagesize);

      return {
        article: data.articles,
        totalResult: data.totalResults,
        currentPage: this._currentPage,
        totalPage: this._totalPage,
        search: this._searchTerm,
        category: this._category,
        isNext: this._isNext(),
        isPrev: this._isPrev(),
      };
    } catch (e) {
      console.log(e, "Problem comes from news.js");
    }
  }

  _getUrl() {
    let url = "/?";
    if (this._country) url += `country=${this._country}`;
    if (this._category) url += `&category=${this._category}`;
    if (this._currentPage) url += `&page=${this._currentPage}`;
    if (this._pagesize) url += `&pageSize=${this._pagesize}`;
    if (this._searchTerm) url += `&q=${this._searchTerm}`;
    return url;
  }

  next() {
    if (this._isNext()) {
      this._currentPage++;
      return this.getNews();
    }
    return false;
  }

  prev() {
    if (this._isPrev()) {
      this._currentPage--;
      return this.getNews();
    }
    return false;
  }

  search(searchValue) {
    this._searchTerm = searchValue;
    return this.getNews();
  }

  changeCategory(inputCategory) {
    this._category = inputCategory;
    this._currentPage = 1;
    return this.getNews();
  }

  setCurrentPage(inputPageNumber) {
    if (inputPageNumber < 1 && inputPageNumber > this._totalPage) {
      return "Your are Provided Worng Page Number.";
    }
    this._currentPage = inputPageNumber;
    return this.getNews();
  }

  _isNext() {
    return this._currentPage < this._totalPage;
  }
  _isPrev() {
    return this._currentPage > 1;
  }
}
