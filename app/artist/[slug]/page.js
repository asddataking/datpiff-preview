import { getArtist, getTapesByArtist } from '../../../lib/data';
import MixtapeGrid from '../../../components/MixtapeGrid';

export default function ArtistPage({ params }) {
  const artist = getArtist(params.slug);
  const tapes = getTapesByArtist(params.slug);

  if (!artist) {
    return (
      <main className="main container">
        <h1>Artist not found</h1>
      </main>
    );
  }

  return (
    <main className="main container">
      <div style={{ marginBottom: 24 }}>
        <div style={{ width: 80, height: 80, borderRadius: '50%', background: '#111', marginBottom: 12 }} />
        <h1 style={{ fontSize: 28, fontWeight: 800, margin: '0 0 4px' }}>{artist.name}</h1>
        <p style={{ color: '#888' }}>{artist.followers} followers · {artist.tapes} tapes</p>
      </div>

      <h2 className="section-title">Tapes</h2>
      <MixtapeGrid tapes={tapes} />
    </main>
  );
}
