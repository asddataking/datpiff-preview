import { getTape } from '../../../lib/data';

export default function TapePage({ params }) {
  const tape = getTape(params.slug);

  if (!tape) {
    return (
      <main className="main container">
        <h1>Tape not found</h1>
      </main>
    );
  }

  return (
    <main className="main container">
      <div style={{ display: 'grid', gap: 24, gridTemplateColumns: '1fr' }}>
        <div>
          <div className="cover-placeholder" style={{ aspectRatio: '1', borderRadius: 16, background: '#111', marginBottom: 16 }} />
          <h1 style={{ fontSize: 28, fontWeight: 800, margin: '0 0 8px' }}>{tape.title}</h1>
          <p style={{ color: '#888', margin: '0 0 16px' }}>
            <a href={`/artist/${tape.artistSlug}`} style={{ color: '#00e5ff' }}>{tape.artist}</a>
            {' · '}{tape.plays} plays
          </p>
          <div className="btn-row" style={{ maxWidth: 280 }}>
            <button className="btn play">▶ Play</button>
            <button className="btn dl">↓ Download</button>
          </div>
        </div>

        <div>
          <h2 style={{ fontSize: 18, marginBottom: 12 }}>Tracks</h2>
          <div style={{ background: '#0a0a0a', borderRadius: 12, border: '1px solid #1a1a1a' }}>
            {tape.tracks.map((track, i) => (
              <div key={track.title} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 16px', borderBottom: i < tape.tracks.length - 1 ? '1px solid #1a1a1a' : 'none' }}>
                <span>{i + 1}. {track.title}</span>
                <span style={{ color: '#666' }}>{track.duration}</span>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: 18, margin: '24px 0 12px' }}>Comments</h2>
          <div style={{ background: '#0a0a0a', borderRadius: 12, border: '1px solid #1a1a1a', padding: 16, color: '#666' }}>
            Comments coming soon — SoundCloud-style engagement.
          </div>
        </div>
      </div>
    </main>
  );
}
