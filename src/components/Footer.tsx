/* Constants */
import constants from '../constants';

/* Interfaces */
import InformationItem from '../interfaces/InformationItem';

/* Helpers */
import helpers from '../helpers';

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

function Footer(): JSX.Element {
  return (
    <footer>
      <div className="banner-04"></div>
      <section id={constants.sections.information}>
        <div className="section-title">
          {helpers.formatTitleCase(constants.sections.information)}
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
      </section>
    </footer>
  );
}

export default Footer;
