import axios from "../axios/axios";

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
      const { data } = await axios.get(this._getUrl());
      const totalPage = Math.ceil(data.totalResults / this._pagesize);

      return {
        article: data.articles,
        totalResult: data.totalResults,
        currentPage: this._currentPage,
        totalPage: totalPage,
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
    console.log(url);
    return url;
  }

  next() {}

  prev() {}

  search() {}

  changeCategory() {}

  setCurrentPage() {}

  _isNext() {
    return this.currentPage < this.totalPage;
  }
  _isPrev() {
    return this.currentPage > 1;
  }
}
