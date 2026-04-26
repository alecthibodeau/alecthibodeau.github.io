import { BrowserRouter, Route, Routes } from 'react-router-dom';

/* Components */
import CodePortfolio from './components/CodePortfolio';
import NotFound from './components/NotFound';
import Loader from './components/Loader';

function App(): JSX.Element {
  const isRedirectActive: boolean = true;

  if (isRedirectActive) {
    window.location.replace("https://github.com/alecthibodeau");
  }

  return (
    <>
      {
        isRedirectActive ?
        <main className="redirect-main">
          <div className="redirect-message-wrapper">
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
