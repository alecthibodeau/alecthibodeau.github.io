/* Components */
import WedgeBanner from './WedgeBanner';

/* Constants */
import constants from '../constants';

/* Interfaces */
import InformationItem from '../interfaces/InformationItem';

/* Helpers */
import helpers from '../helpers';

function Footer(props: { isBreakpointXs: boolean, viewportWidth: number }): JSX.Element {
  const { sections } = constants;

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

  return (
    <footer>
      <WedgeBanner
        id={sections.information}
        isBreakpointXs={props.isBreakpointXs}
        viewportWidth={props.viewportWidth}
        color="green"
      />
      <section id={sections.information}>
        <div className="section-title">
          {helpers.formatTitleCase(sections.information)}
        </div>
        <div className="information-box">
          {constants.informationItems.map(renderInformationItem)}
        </div>
        <div className="credit">
          {`Alec Thibodeau, ${new Date().getFullYear()}`}
        </div>
        <div className="stripes-container">
          {Array(7).fill('stripe').map((item: string, index: number) => {
            return (<div key={`${item}-${index}`}></div>);
          })}
        </div>
        <div className="discs-container">
          {Array(Math.floor(props.viewportWidth/7)).fill('disc').map((item: string, index: number) => {
            return (
              <div key={`${item}-${index}`} className={`${item}-${index % 2 === 0 ? 'odd' : 'even'}`}></div>
            );
          })}
        </div>
      </section>
    </footer>
  );
}

export default Footer;
