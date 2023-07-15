/* Constants */
import constants from '../constants';

/* Interfaces */
import ContactItem from '../interfaces/ContactItem';

function renderContactItem(item: ContactItem, index: number): JSX.Element {

  const isResume: boolean = item.name.toLowerCase() === 'resume';

  return (
    <a
      key={`${item.name}-${index}`}
      className="text-link"
      href={item.href}
      target={isResume ? '_blank' : '_top'}
      rel={`noopener ${isResume ? 'noreferrer' : ''}`}
      download={isResume}>
      <img
        src={item.image}
        alt={`${item.name} SVG icon`} />
      <div className="contact-text">
        {item.linkText ? item.linkText : item.name}
      </div>
    </a>
  );
}

function Footer(): JSX.Element {
  return (
    <footer>
      <div className="banner-04"></div>
      <section id="contact">
        <div className="paragraph-title">contact</div>
        <div className="contact-box">
          {constants.contactItems.map(renderContactItem)}
        </div>
        <div>
          <p>
            I design and maintain this code portfolio site with React, TypeScript
            and Sass (<a className="text-link" href="https://github.com/alecthibodeau/alecthibodeau.github.io">
              see the code at GitHub
            </a>). Scroll up for more <a className="text-link" href="#projects">projects</a>.
          </p>
          <div className="credit">{`Alec Thibodeau, ${new Date().getFullYear()}`}</div>
        </div>
        <div className="stripes-container">
          {Array(7).fill('stripe').map((item: string, index: number) => {
            return (<div key={`${item}${index}`}></div>);
          })}
        </div>
      </section>
    </footer>
  );
}

export default Footer;
