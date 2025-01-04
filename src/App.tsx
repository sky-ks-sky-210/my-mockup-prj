// src/App.tsx
import React from "react";
import LocalImage from "./assets/local-image.jpg";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Mockup Page</h1>
      </header>
      <main>
        <section>
          <h2>Local Image</h2>
          <img src={LocalImage} alt="Local Example" style={{ maxWidth: "100%" }} />
        </section>
        <section>
          <h2>External Image</h2>
          <img
            src="https://via.placeholder.com/600x400"
            alt="External Example"
            style={{ maxWidth: "100%" }}
          />
        </section>
      </main>
      <footer>
        <p>© 2025 React Mockup</p>
      </footer>
    </div>
  );
};

export default App;
