import { useEffect, useState } from 'react';

/* Components */
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

function CodePortfolio(): JSX.Element {
  const [viewportWidth, setViewportWidth] = useState<number>(window.innerWidth);
  const [isBreakpointXs, setIsBreakpointXs] = useState<boolean>(true);

  const breakpointSm: number = 576;
  const resize: string = 'resize';

  useEffect(() => {
    window.addEventListener(resize, getViewportWidth);
    setIsBreakpointXs(viewportWidth < breakpointSm);
    return(() => window.removeEventListener(resize, getViewportWidth));
  }, [viewportWidth]);

  function getViewportWidth(): void {
    setViewportWidth(window.innerWidth);
  }

  return (
    <div>
      <Header />
      <Main isBreakpointXs={isBreakpointXs} viewportWidth={viewportWidth} />
      <Footer isBreakpointXs={isBreakpointXs} viewportWidth={viewportWidth} />
    </div>
  );
}

export default CodePortfolio;
