function Loading() {
  return (
    <div className="d-flex align-items-center">
      <strong>Loading....</strong>
      <div
        className="spinner-border text-danger"
        role="status"
        aria-hidden="true"
        style={{ marginLeft: "auto" }}
      ></div>
    </div>
  );
}

export default Loading;
