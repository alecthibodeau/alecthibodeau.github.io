function NotFound(): JSX.Element {
  return (
    <div className="not-found-container">
      <div className="not-found-text">
        <h1>404 Error</h1>
        <h2>The page you requested could not be found.</h2>
        <a className="text-link" href="https://alect.me">alect.me</a>
      </div>
    </div>
  );
}

export default NotFound;
