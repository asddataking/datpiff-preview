import Header from '../components/Header';
import MixtapeGrid from '../components/MixtapeGrid';

const featured = [
  { title: 'Night Shift', artist: 'Young Maverick', listens: '128K', cover: '/covers/night-shift.jpg' },
  { title: 'Gold Rush', artist: 'King', listens: '94K', cover: '/covers/gold-rush.jpg' },
  { title: 'Spotlight', artist: 'She', listens: '76K', cover: '/covers/spotlight.jpg' },
];

const hottest = [
  { title: 'Block Party', artist: 'Real From The Block', rating: 5, listens: '52K', cover: '/covers/block-party.jpg', badge: 'hot' },
  { title: 'Night Shift', artist: 'Young Maverick', rating: 4, listens: '128K', cover: '/covers/night-shift.jpg' },
  { title: 'Gold Rush', artist: 'King', rating: 5, listens: '94K', cover: '/covers/gold-rush.jpg', badge: 'new' },
  { title: 'Spotlight', artist: 'She', rating: 4, listens: '76K', cover: '/covers/spotlight.jpg' },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="main container">
        <h2 className="section-title">
          Featured <span>tapes we believe in</span>
        </h2>
        <div className="featured">
          {featured.map((tape) => (
            <div key={tape.title} className="featured-card">
              <img src={tape.cover} alt={tape.title} />
              <div className="overlay">
                <h3>{tape.title}</h3>
                <p>{tape.artist} • {tape.listens}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="section-title">
          Hottest Right Now <span>what’s moving</span>
        </h2>
        <MixtapeGrid tapes={hottest} />

        <div className="note">
          <strong>TAPE</strong> — The spot for mixtapes. Discover, stream, and download the latest from the streets and the studio.
        </div>
      </main>
      <footer>
        TAPE • mixtapes • mobile-first
      </footer>
    </>
  );
}
