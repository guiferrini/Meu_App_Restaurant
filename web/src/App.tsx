import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styleGlobal';

const App: React.FC = () => (
  <>  
    <BrowserRouter>
      <h1>Hello World</h1>
      <h2>Vamooo</h2>
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
