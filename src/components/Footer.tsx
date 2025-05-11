import { useState } from 'react';

/* Components */
import PatternBanner from './PatternBanner';

/* Constants */
import constants from '../constants';

/* Interfaces */
import InformationItem from '../interfaces/InformationItem';
import Shape from '../interfaces/Shape';

/* Helpers */
import helpers from '../helpers';

function Footer(props: { isBreakpointXs: boolean, viewportWidth: number }): JSX.Element {
  const { sections } = constants;
  const [shapes] = useState<Shape[]>(
    Array(300).fill(null).map(() => ({
      position: getRandomNumber(4),
      size: getRandomNumber(4),
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
        className="text-link"
        href={item.href}>
        <img
          src={item.image}
          alt={`${item.name} SVG icon`} />
        <div className="information-text">
          {item.name}
        </div>
      </a>
    );
  }

  function renderShape(item: Shape, index: number): JSX.Element {
    return (
      <div
        key={`shape-${index}`}
        className={
          `shape position-${item.position} size-${item.size} flip-${item.flip} form-${item.form} rotation-${item.rotation} color-${item.color}`
        }
      />
    );
  }

  return (
    <footer>
      <PatternBanner
        id={sections.information}
        isBreakpointXs={props.isBreakpointXs}
        viewportWidth={props.viewportWidth}
        color="green"
      />
      <section>
        <h3 className="section-title">
          {helpers.formatTitleCase(sections.information)}
        </h3>
        <div className="information-box">
          {constants.informationItems.map(renderInformationItem)}
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
      <div className="shapes-field">
        {shapes.map(renderShape)}
      </div>
    </footer>
  );
}

export default Footer;
