/* Constants */
import constants from '../constants';

/* Interfaces */
import ContactItem from '../interfaces/ContactItem';

function renderContactItem(item: ContactItem, index: number) {
  return (
    <a
      key={`${item.name}${index}`}
      className="text-link"
      href={item.href}
      target={item.name === 'resume' ? '_blank' : '_top'}>
      <img
        src={item.image}
        alt={`${item.name} SVG icon`} />
      <div className="contact-text">
        {item.linkText ? item.linkText : item.name}
      </div>
    </a>
  );
}

function Footer() {
  return (
    <footer>
      <div className="banner-04" style={{backgroundImage: `url(${constants.greenTile})`}}></div>
      <section id="contact">
        <div className="paragraph-title">contact</div>
        <div className="contact-box">
          {constants.contactItems.map(renderContactItem)}
        </div>
        <div>
          <p>
            I design and maintain this code portfolio website with React, TypeScript
            and Sass (<a className="text-link" href="https://github.com/alecthibodeau/alecthibodeau.github.io">
              see the code
            </a>). Scroll up to see <a className="text-link" href="#projects">projects</a>.
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
