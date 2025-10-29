export default function SystemSection() {
  return (
    <section className="system-section">
      <div className="container-wide">
        <div className="icon-grid-bg">
          <div className="icon-grid">
            {Array.from({ length: 21 }).map((_, i) => (
              <div key={i} className={`grid-icon ${i === 7 ? 'active' : ''}`}>
                {i === 7 && (
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="white">
                    <circle cx="30" cy="30" r="20"/>
                    <path d="M20 25 L28 25 L28 35 L32 35 L32 25 L40 25" stroke="#000" strokeWidth="3" fill="none"/>
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="system-content">
          <h2>The code review platform for modern teams</h2>
          <p>Codity integrates seamlessly into your workflow, from PR creation to merge.</p>
        </div>
      </div>
    </section>
  );
}
