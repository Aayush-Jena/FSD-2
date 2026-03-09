export default function Home() {
  return (
    <div className="content-box">
      <h1>Discover React's Code-Splitting Magic</h1>
      <p>
        Explore how React's code-splitting capability enhances your application's performance.
        Code-splitting enables you to dynamically load specific parts of your application exactly when users need them.
      </p>

      <h2>Understanding Code-Splitting</h2>
      <p>
        Code-splitting defers the loading of non-essential components until the user actually accesses them.
        This strategy shrinks your initial application package and accelerates your app's startup time.
      </p>

      <h3>Key Advantages:</h3>
      <ul className="feature-list">
        <li className="feature-item">
          <strong>Accelerated Initial Load:</strong> Pull in components as they're requested, shrinking the initial download.
        </li>
        <li className="feature-item">
          <strong>Enhanced Efficiency:</strong> Fetch resources strategically, optimizing user experience based on demand.
        </li>
        <li className="feature-item">
          <strong>Straightforward Integration:</strong> React simplifies the process with React.lazy() and Suspense utilities.
        </li>
      </ul>

      <h3>Implementation Steps:</h3>
      <p>
        1. Bring in React.lazy() and Suspense from the 'react' library<br />
        2. Apply lazy() when importing your target component<br />
        3. Encapsulate your component in Suspense and specify a loading alternative
      </p>

      <p style={{ marginTop: '20px', padding: '15px', backgroundColor: '#e7f3ff', borderRadius: '5px', border: '1px solid #007bff' }}>
        <strong>Give it a try:</strong> Select the Dashboard link to observe code-splitting in action!
      </p>
    </div>
  );
}
