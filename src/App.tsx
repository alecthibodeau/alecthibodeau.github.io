import { useEffect} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

/* Components */
import CodePortfolio from './components/CodePortfolio';
import NotFound from './components/NotFound';

function App() {
  const currentResumeRoute = '/documents/alec_thibodeau_resume_web.pdf';
  const formerResumeRoute = `/public${currentResumeRoute}`;
  const pathName = window.location.pathname;

  useEffect(() => {
    if (pathName === formerResumeRoute) window.location.href = currentResumeRoute;
  }, []);

  function checkForFormerResumeRoute() {
    if (pathName !== formerResumeRoute && pathName !== currentResumeRoute) {
      return '*';
    }
  };

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="app">
        <Routes>
          <Route path="/" element={<CodePortfolio />} />
          <Route path={checkForFormerResumeRoute()} element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
