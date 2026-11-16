export default function MixtapeGrid({ tapes }) {
  return (
    <div className="grid">
      {tapes.map((tape) => (
        <a key={tape.title} href={`/tape/${tape.slug || tape.title.toLowerCase().replace(/\\s+/g, '-')}`} className="card">
          {tape.badge && <span className="badge">{tape.badge}</span>}
          <div className="cover-placeholder" />
          <div className="card-info">
            <h4>{tape.title}</h4>
            <div className="artist">{tape.artist}</div>
            <div className="stats">
              <span className="stars">{'★'.repeat(tape.rating || 0)}{'☆'.repeat(5 - (tape.rating || 0))}</span>
              <span>{tape.listens || tape.plays || '0'}</span>
            </div>
            <div className="btn-row">
              <button className="btn play" type="button">▶ Play</button>
              <button className="btn dl" type="button">↓</button>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
