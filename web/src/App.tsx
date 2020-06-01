import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styleGlobal';
import Routes from './routes/index';

const App: React.FC = () => (
  <>  
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyle />
  </>
);

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}
*/
export default App;
