import { BrowserRouter, Route, Routes } from 'react-router-dom';

/* Components */
import CodePortfolio from './components/CodePortfolio';
import NotFound from './components/NotFound';

function App() {

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="app">
        <Routes>
          <Route path="/" element={<CodePortfolio />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
