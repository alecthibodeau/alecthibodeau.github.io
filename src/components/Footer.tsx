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
        <div className="section-title">{helpers.formatTitleCase(constants.sections.information)}</div>
        <div className="information-box">
          {constants.informationItems.map(renderInformationItem)}
        </div>
        <div>
          <p>
            I design and maintain this code portfolio site with React, TypeScript
            and Sass (<a className="text-link" href={constants.hypertextReference.gitHub}>see
            the code at GitHub</a>). Scroll up for more <a className="text-link" href="#projects">projects</a>.
          </p>
          <div className="credit">{`Alec Thibodeau, ${new Date().getFullYear()}`}</div>
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
