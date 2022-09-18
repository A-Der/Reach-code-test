import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

export const getArticleData = (data = []) =>
  data.map((d) => {
    const { id, title, imageUrl, url, publishedAt, summary } = d;
    const dateTime = new Date(publishedAt);
    const publishedTime = dateTime.toLocaleTimeString().slice(0, -3);
    const publishedDate = dateTime.toLocaleDateString();
    return (
      <div className="column is-one-third-desktop is-half-tablet" key={id}>
        {makeCard(
          id,
          title,
          imageUrl,
          url,
          publishedTime,
          publishedDate,
          summary
        )}
      </div>
    );
  });

export const getGraphics = (data = []) => {
  const counts = {};
  data.forEach(function (x) {
    const { newsSite } = x;
    counts[newsSite] = (counts[newsSite] || 0) + 1;
  });
  const graphicsData = [];
  for (const [key, value] of Object.entries(counts)) {
    graphicsData.push({ name: key, uv: value });
  }
  return graphicsData;
};

export const renderLineChart = (chartData = []) => (
  <LineChart width={600} height={300} data={chartData}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
  </LineChart>
);

export const columns = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "No. of Articles",
    accessor: "uv",
  },
];

export const makeCard = (
  id,
  title = "",
  imageUrl = "",
  url = "",
  publishedTime = "",
  publishedDate = "",
  summary = ""
) => (
  <div className="card">
    <div className="card-image">
      <figure className="image is-4by3">
        <img src={imageUrl} alt={title} />
      </figure>
    </div>
    <div className="card-content">
      <div className="media">
        <div className="media-content">
          <a
            className="title is-6 link"
            target={"_blank"}
            href={url}
            rel="noreferrer"
          >
            {title}
          </a>
          <br></br>
          <p className="subtitle is-7">
            Published on {publishedDate} at {publishedTime}
          </p>
        </div>
      </div>

      <div className="content">{summary}</div>
    </div>
  </div>
);

export const getChunks = (data = [], articlesePerPage = 5, array = []) => {
  for (let i = 0; i < data.length; i += articlesePerPage) {
    const chunk = data.slice(i, i + articlesePerPage);
    array.push(chunk);
  }
  return array;
};

export const getFilterVals = (data) => [
  ...new Set(data.map((item) => item.newsSite)),
];

export const filterData = (data, filterVal) =>
  data.filter((d) => (filterVal === "all" ? d : d.newsSite === filterVal));

export const renderPagination = (
  handlePageChange,
  page,
  paginationLimit,
  setPageCallback
) => (
  <nav className="pagination" role="navigation" aria-label="pagination">
    <button
      onClick={() =>
        handlePageChange("decrement", page, paginationLimit, setPageCallback)
      }
      className="pagination-previous is-disabled"
      title="This is the first page"
    >
      Previous
    </button>
    <button
      className="pagination-next"
      onClick={() =>
        handlePageChange("increment", page, paginationLimit, setPageCallback)
      }
    >
      Next page
    </button>
  </nav>
);

export const handlePageChange = (variant, page, paginationLimit, callBack) =>
  variant === "increment" && page < paginationLimit
    ? callBack(page + 1)
    : variant === "decrement" && page > 0
    ? callBack(page - 1)
    : null;

export const handleArticleView = (value, callBack) => callBack(value);
export const handleFilter = (value, callBack) => callBack(value);

export const loadingSpinner = () => {
  return (
    <div className="spinner container-small">
      <div className="loading-spinner"></div>
    </div>
  );
};

export const isErrorMessage = () => {
  return (
    <div className="container-small">
      <div className="error">Error fetching data, please contact support</div>
    </div>
  );
};
