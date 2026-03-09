export default function Dashboard() {
  return (
    <div className="content-box">
      <h1>Analytics Panel</h1>
      <p>This interface loaded dynamically on-demand!</p>

      <h2>Impact Metrics</h2>
      <p>Review these performance indicators demonstrating code-splitting advantages:</p>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-value">65%</div>
          <div className="stat-label">Package Size Cut</div>
        </div>

        <div className="stat-card">
          <div className="stat-value">0.8s</div>
          <div className="stat-label">Delivery Duration</div>
        </div>

        <div className="stat-card">
          <div className="stat-value">98/100</div>
          <div className="stat-label">Efficiency Rating</div>
        </div>
      </div>

      <h3>Behind the Scenes of This Page Load</h3>
      <p>
        Upon selecting the Analytics Panel option, React fetched and executed this interface
        independently from the startup package. The implications are:
      </p>
      <ul className="feature-list">
        <li className="feature-item">
          Your app launches quicker since this section wasn't bundled initially
        </li>
        <li className="feature-item">
          Visitors who bypass this section skip downloading its resources entirely
        </li>
        <li className="feature-item">
          Subsequent access pulls the pre-stored version from memory
        </li>
      </ul>

      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#d4edda', borderRadius: '5px', border: '1px solid #28a745' }}>
        <strong>Achievement Unlocked!</strong> You've witnessed code-splitting in action. The Analytics Panel
        activated exclusively when requested.
      </div>
    </div>
  );
}