import Header from '../components/Header';
import MixtapeGrid from '../components/MixtapeGrid';

const featured = [
  { title: 'So Far Gone', artist: 'Drake', listens: '4.2M', cover: '/covers/so-far-gone.jpg' },
  { title: 'Dreamchasers', artist: 'Meek Mill', listens: '3.8M', cover: '/covers/dreamchasers.jpg' },
  { title: 'Acid Rap', artist: 'Chance the Rapper', listens: '2.1M', cover: '/covers/acid-rap.jpg' },
];

const hottest = [
  { title: 'Dedication 5', artist: 'Lil Wayne', rating: 5, listens: '1.9M', cover: '/covers/dedication.jpg', badge: 'platinum' },
  { title: 'Gangsta Grillz', artist: 'DJ Drama', rating: 4, listens: '892K', cover: '/covers/gangsta-grillz.jpg', badge: 'gold' },
  { title: 'Kush & Orange Juice', artist: 'Wiz Khalifa', rating: 5, listens: '2.4M', cover: '/covers/kush-oj.jpg' },
  { title: 'Beam Me Up Scotty', artist: 'Nicki Minaj', rating: 4, listens: '1.1M', cover: '/covers/beam-me-up.jpg', badge: 'exclusive' },
  { title: 'Rich Forever', artist: 'Rick Ross', rating: 5, listens: '756K', cover: '/covers/rich-forever.jpg' },
  { title: 'Dreamchasers 2', artist: 'Meek Mill', rating: 5, listens: '4.1M', cover: '/covers/dreamchasers.jpg' },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="main container">
        <h2 className="section-title">
          Featured Mixtapes <span>the ones we co-sign</span>
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
          Hottest Right Now <span>updated every few minutes</span>
        </h2>
        <MixtapeGrid tapes={hottest} />

        <div className="note">
          <strong>The Authority in Mixtapes</strong> — Stream or download free hip-hop mixtapes. Classic DatPiff energy, rebuilt mobile-first in Next.js.
        </div>
      </main>
      <footer>
        datPiff preview • Next.js • mobile-friendly
      </footer>
    </>
  );
}
