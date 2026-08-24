import { useState } from 'react';

/* Constants */
import constants from '../constants';

/* Interfaces */
import InformationItem from '../interfaces/InformationItem';
import Shape from '../interfaces/Shape';

/* Helpers */
import helpers from '../helpers';

function Footer(props: { isBreakpointXs: boolean, viewportWidth: number }): JSX.Element {
  const { sections } = constants;

  const isFooterInfoDisplayed: boolean = true;

  const [shapes] = useState<Shape[]>(
    Array(20).fill(null).map(() => ({
      position: getRandomNumber(4),
      size: getRandomNumber(4),
      zIndex: getRandomNumber(4),
      flip: getRandomNumber(2),
      form: getRandomNumber(4),
      rotation: getRandomNumber(6),
      color: getRandomNumber(4)
    }))
  );

  function getRandomNumber(range: number): number {
    return Math.floor(Math.random() * range);
  }

  function renderInformationItem(item: InformationItem, index: number): JSX.Element {
    return (
      <a
        key={`${item.name}-${index}`}
        className="information-link"
        href={item.href}
        target='_blank'
      >
        <svg
          id={`${item.name}Icon`}
          role="img"
          aria-labelledby="svg-title"
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          version="1.1"
          viewBox="0 0 80 80"
        >
          <title id="svg-title">{`${item.name} icon`}</title>
          <g>
            <path className="information-link-path" d={item.pathDrawnOne} />
            {
              item.pathDrawnTwo ?
              <path className="information-link-path" d={item.pathDrawnTwo} /> : null
            }
          </g>
        </svg>
        <div className="information-link-text">
          {item.name}
        </div>
      </a>
    );
  }

  function renderShape(item: Shape, index: number): JSX.Element {
    return (
      <div
        key={`shape-${index}`}
        className={`
          shape position-${item.position}
          size-${item.size}
          z-index-${item.zIndex}
          flip-${item.flip}
          form-${item.form}
          rotation-${item.rotation}
          color-${item.color}
        `}
      />
    );
  }

  return (
    <footer>
      {
        isFooterInfoDisplayed ?
        <>
          <div className="stripe green"></div>
          <section
            id={sections.information}
            className={`section-${sections.information}`}
          >
            <h3 className="section-title">
              {helpers.formatTitleCase(sections.information)}
            </h3>
            <div className="information-links-wrapper">
              {constants.informationItems.map(renderInformationItem)}
            </div>
            <div className="shapes-field">
              {shapes.map(renderShape)}
            </div>
            <div className="credit">
              Alec Thibodeau, {new Date().getFullYear()}
            </div>
            <div className="stripes-container">
              {Array(7).fill('stripe').map((item: string, index: number) => {
                return (<div key={`${item}-${index}`}></div>);
              })}
            </div>
          </section>
        </> :
        null
      }
    </footer>
  );
}

export default Footer;
