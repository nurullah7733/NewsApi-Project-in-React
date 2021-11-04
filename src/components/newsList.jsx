function getDateString(dateTimeStr) {
  return new Date(dateTimeStr).toDateString();
}
function NewsItem({ item }) {
  return (
    <div className="card mb-4">
      {item.urlToImage && (
        <img className="card-img-top" src={item.urlToImage} alt={item.title} />
      )}

      <div className="card-body">
        <a
          href={item.url}
          target="_blank"
          rel="noreferrer"
          style={{ color: "#424242", textDecoration: "none" }}
        >
          <h5 className="card-title">{item.title}</h5>
        </a>
        <a
          href={item.url}
          target="_blank"
          rel="noreferrer"
          style={{ color: "#424242", textDecoration: "none" }}
        >
          {item.content}
        </a>
        <div className="mt-2 d-flex align-item-center">
          <small>
            <strong>Published at {getDateString(item.publishedAt)}</strong>
          </small>
          <div
            style={{
              padding: "0.25rem 0.5rem",
              background: "#ededed",
              color: "#424242",
              borderRadius: "0.25rem",
              display: "inline-block",
              marginLeft: "auto",
            }}
          >
            <small>{item.source.name}</small>
          </div>
        </div>
      </div>
    </div>
  );
}

function NewsList({ allNews }) {
  return (
    <div>
      {allNews && allNews.length === 0 && <h1>There is no News.</h1>}
      {allNews.map((item) => (
        <NewsItem item={item} key={Math.random()} />
      ))}
    </div>
  );
}

export default NewsList;
