export default function MixtapeGrid({ tapes }) {
  return (
    <div className="grid">
      {tapes.map((tape) => (
        <div key={tape.title} className="card">
          {tape.badge && <span className="badge">{tape.badge}</span>}
          <img src={tape.cover} alt={tape.title} />
          <div className="card-info">
            <h4>{tape.title}</h4>
            <div className="artist">{tape.artist}</div>
            <div className="stats">
              <span className="stars">{'★'.repeat(tape.rating)}{'☆'.repeat(5 - tape.rating)}</span>
              <span>{tape.listens}</span>
            </div>
            <div className="btn-row">
              <button className="btn play">▶ Play</button>
              <button className="btn dl">↓ MP3</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
