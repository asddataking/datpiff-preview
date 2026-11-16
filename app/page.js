import Header from '../components/Header';
import MixtapeGrid from '../components/MixtapeGrid';
import { tapes } from '../lib/data';

const featured = tapes.slice(0, 3);
const hottest = tapes;

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
            <a key={tape.slug} href={`/tape/${tape.slug}`} className="featured-card">
              <div className="cover-placeholder" />
              <div className="overlay">
                <h3>{tape.title}</h3>
                <p>{tape.artist} • {tape.plays}</p>
              </div>
            </a>
          ))}
        </div>

        <h2 className="section-title">
          Hottest Right Now <span>what’s moving</span>
        </h2>
        <MixtapeGrid tapes={hottest} />

        <div className="note">
          <strong>TAPE</strong> — The 2026 spot for mixtapes. Stream, upload, and discover. SoundCloud energy, DatPiff roots.
        </div>
      </main>
      <footer>
        TAPE • mixtapes • 2026
      </footer>
    </>
  );
}
