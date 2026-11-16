export default function UploadPage() {
  return (
    <main className="main container">
      <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 8 }}>Upload a Tape</h1>
      <p style={{ color: '#888', marginBottom: 24 }}>Drop your mixtape. We’ll handle the rest.</p>

      <form style={{ maxWidth: 480, display: 'grid', gap: 16 }}>
        <div>
          <label style={{ display: 'block', marginBottom: 6, fontSize: 14 }}>Title</label>
          <input type="text" placeholder="Night Shift" style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: '1px solid #222', background: '#111', color: '#fff' }} />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: 6, fontSize: 14 }}>Artist</label>
          <input type="text" placeholder="Your name" style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: '1px solid #222', background: '#111', color: '#fff' }} />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: 6, fontSize: 14 }}>Audio</label>
          <input type="file" accept="audio/*" style={{ width: '100%' }} />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: 6, fontSize: 14 }}>Cover</label>
          <input type="file" accept="image/*" style={{ width: '100%' }} />
        </div>
        <button type="button" className="btn play" style={{ maxWidth: 200 }}>Upload Tape</button>
      </form>
    </main>
  );
}
