/* Constants */
import constants from '../constants';

/* Documents */
import pdfResume from '../assets/documents/alec_thibodeau_resume_web.pdf';

/* Helpers */
import { getImage } from '../helpers/get-image';

/* Interfaces */
import ContactItem from '../interfaces/ContactItem';

function renderContactItem(item: ContactItem, index: number) {
  return (
    <a
      key={`${item.name}${index}`}
      className="text-link"
      href={item.name === 'resume' ? pdfResume : item.href}
      target={item.name === 'resume' ? '_blank' : '_top'}>
      <img
        src={getImage(item.name, constants.contactImages)}
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
      <div className="banner-04" style={{backgroundImage: `url(${constants.siteImages.greenTile})`}}></div>
      <section id="contact">
        <div className="paragraph-title">contact</div>
        <div className="contact-box">
          {constants.contactItems.map(renderContactItem)}
        </div>
        <div>
          <p>
            I built this code portfolio website with React, TypeScript and Sass. I also designed the UI/UX for it, which included using Adobe Illustrator to make custom SVG images. Scroll up to see more <a className="text-link" href="#projects">projects</a>.
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
