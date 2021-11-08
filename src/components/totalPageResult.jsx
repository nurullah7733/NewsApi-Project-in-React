function TotalPageResult({ totalPage, totalResult, currentPage }) {
  return (
    <div className="d-flex">
      <p className="text-black-50">About {totalResult} Result Found</p>
      <p className="text-black-50 " style={{ marginLeft: "auto" }}>
        Page {currentPage} of {totalPage}
      </p>
    </div>
  );
}

export default TotalPageResult;
