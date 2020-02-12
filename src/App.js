import React from 'react';
import Header from './components/Header';
import Latest from './components/Latest';

import './App.css';
import * as L from './styles/layout';

function App() {
  return (
    <div className="App">
      <Header />
      <main role="main">
        <L.OuterWrapper>
          <div>
            <h2>Latest Launch</h2>
          </div>
          <Latest />
        </L.OuterWrapper>
      </main>
    </div>
  );
}

export default App;
