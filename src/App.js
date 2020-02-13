import React from 'react';
import Header from './components/Header';
import Launches from './components/Launches';

import './App.css';
import * as L from './styles/layout';

function App() {
  return (
    <div className="App">
      <Header />
      <main role="main">
        <L.OuterWrapper>
          <div>
            <section style={{ marginBottom: 48, paddingBottom: 48, borderBottom: '1px solid #E3E3E3' }}>
              <div>
                <h2>Latest Launch</h2>
              </div>
              <Launches type="latest" />
            </section>

            <section>
              <div>
                <h2>Next Launch</h2>
              </div>
              <Launches type="next" />
            </section>
          </div>
        </L.OuterWrapper>
      </main>
    </div>
  );
}

export default App;
