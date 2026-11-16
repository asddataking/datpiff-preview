export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo-row">
          <img src="/covers/logo.jpg" alt="TAPE" className="logo" />
          <div className="search-bar">
            <input type="text" placeholder="Search tapes..." />
          </div>
        </div>
        <nav className="nav">
          <a href="#" className="active">home</a>
          <a href="#">tapes</a>
          <a href="#">hottest</a>
          <a href="#">new</a>
          <a href="#">artists</a>
        </nav>
      </div>
    </header>
  );
}
