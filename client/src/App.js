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
            <L.LaunchSection>
              <div className="launch-section-header">
                <h2>Latest Launch</h2>
              </div>
              
              <Launches type="latest" />
            </L.LaunchSection>

            <L.LaunchSection>
              <div className="launch-section-header">
                <h2>Upcoming Launch</h2>
              </div>

              <Launches type="next" />
            </L.LaunchSection>
          </div>
        </L.OuterWrapper>
      </main>
    </div>
  );
}

export default App;
