export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo-row">
          <img src="/covers/logo.jpg" alt="datPiff" className="logo" />
          <div className="search-bar">
            <input type="text" placeholder="Search mixtapes..." />
          </div>
        </div>
        <nav className="nav">
          <a href="#" className="active">home</a>
          <a href="#">mixtapes</a>
          <a href="#">hottest</a>
          <a href="#">upcoming</a>
          <a href="#">singles</a>
          <a href="#">news</a>
          <a href="#">artists</a>
        </nav>
      </div>
    </header>
  );
}
