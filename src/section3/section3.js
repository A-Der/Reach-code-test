import { useState } from "react";
import { useQuery } from "react-query";
import ReactTable from "react-table-6";
import {
  getChunks,
  getFilterVals,
  renderPagination,
  columns,
  getArticleData,
  getGraphics,
  renderLineChart,
  loadingSpinner,
  isErrorMessage,
  handlePageChange,
  handleFilter,
  handleArticleView,
  filterData,
} from "./section3.config";
import "./section3.scss";
import "react-table-6/react-table.css";

// approx. 6.5hours

const fetchArticles = async () => {
  const res = await fetch("https://api.spaceflightnewsapi.net/v3/articles");
  return res.json();
};

const SpaceApp = () => {
  const { data = [], isLoading, isError } = useQuery("articles", fetchArticles);
  const [articlesePerPage, setArticlesPerPage] = useState(5);
  const [filterVal, setFilterVal] = useState("all");
  const [page, setPage] = useState(0);
  const graphicsData = getGraphics(data);
  const filterVals = getFilterVals(data);
  const filteredData = filterData(data, filterVal);
  const articleChunks = [];
  getChunks(filteredData, articlesePerPage, articleChunks);
  const articleData = getArticleData(articleChunks[page]);
  const paginationLimit = articleChunks.length - 1;
  const pagination = renderPagination(
    handlePageChange,
    page,
    paginationLimit,
    setPage
  );

  const renderPage = () => (
    <div className="section">
      <div className="header">
        {renderLineChart(graphicsData)}
        <ReactTable minRows={0} data={graphicsData} columns={columns} />
      </div>
      <div className="container">
        <div className="config-box">
          <div className="filter-box">
            <div className="title-filter">News Site</div>
            <div className="select is-rounded is-medium">
              <select
                onChange={({ target }) =>
                  handleFilter(target.value, setFilterVal)
                }
              >
                <option value={"all"}>{"All"}</option>
                {filterVals.map((val) => (
                  <option key={val} value={val}>
                    {val}
                  </option>
                ))}
              </select>
            </div>
            <div className="title-filter">Articles Per Page</div>
            <div className="select is-rounded is-medium">
              <select
                onChange={({ target }) =>
                  handleArticleView(target.value, setArticlesPerPage)
                }
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
              </select>
            </div>
          </div>
          {pagination}
        </div>
        <div className="columns is-centered is-multiline">{articleData}</div>
        {pagination}
      </div>
    </div>
  );

  return (
    <>
      {isLoading && !isError
        ? loadingSpinner()
        : isError
        ? isErrorMessage()
        : renderPage()}
    </>
  );
};

export default SpaceApp;
