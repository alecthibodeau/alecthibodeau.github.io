import { BrowserRouter, Route, Routes } from 'react-router-dom';

/* Components */
import CodePortfolio from './components/CodePortfolio';
import NotFound from './components/NotFound';
import Loader from './components/Loader';

function App(): JSX.Element {
  const isRedirectActive: boolean = false;

  if (isRedirectActive) {
    window.setTimeout(function() {
      window.location.href = "http://www.alec.art";
    }, 5000);
  }

  return (
    <>
      {
        isRedirectActive ?
        <main className="redirect-main">
          <div className="redirect-message-wrapper">
            <p className="redirect-message">
              Hi. You're being redirected
              to <a href="https://www.huetown.com" className="text-link">huetown.com</a>.
            </p>
            <Loader />
          </div>
        </main> :
        <BrowserRouter>
          <div className="app">
            <Routes>
              <Route path="/" element={<CodePortfolio />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      }
    </>
  );
}

export default App;
