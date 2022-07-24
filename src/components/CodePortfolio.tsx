/* Constants */
import constants from '../constants';

/* Interfaces */
import ContactImages from '../interfaces/ContactImages';
import ContactItem from '../interfaces/ContactItem';
import ProjectImages from '../interfaces/ProjectImages';
import ProjectItem from '../interfaces/ProjectItem';

/* Documents */
import pdfResume from '../assets/documents/alec_thibodeau_resume_web.pdf';

function CodePortfolio() {
  function getImage(key: string, images: ContactImages | ProjectImages) {
    return images[key as keyof typeof images];
  };

  function renderProjectItem(item: ProjectItem, index: number) {
    return (
      <div key={`${item.name}${index}`} className="project-container">
        <a href={item.website}>
          <div className="project-info-outer">
            <div className="project-info-inner">
              <div className="project-info-title">{item.name}</div>
              <div className="project-info-text">
                <div>{item.infoText}</div>
                <div>
                  <div className="front-end">Front End:</div>
                  <div>{item.frontEndTechnology}</div>
                </div>
                {item.backEndTechnology && <div>
                  <div className="back-end">Back End:</div>
                  <div>{item.backEndTechnology}</div>
                </div>}
              </div>
            </div>
          </div>
          <img
            className="project-img"
            src={getImage(item.id, constants.projectImages)}
            alt={item.altText} />
        </a>
        <div className="project-routing-links">
          <div className="project-title">{item.name}</div>
          <a href={item.website}>website</a>
          <a href={item.clientRepo}>client repo</a>
          {item.apiRepo && <a href={item.apiRepo}>api repo</a>}
        </div>
      </div>
    );
  }

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

  return (
    <div>
      <header>
        <nav>
          <a href="#about">about</a>
          <a href="#projects">projects</a>
          <a href="#contact">contact</a>
        </nav>
      </header>
      <main>
        <div className="banner-01" style={{backgroundImage: `url(${constants.siteImages.greenTile})`}}>
          <img className="tree" src={constants.siteImages.tree} alt="AT tree logo" />
        </div>
        <div id="about" className="name-and-occupations">
          <div className="name">alec thibodeau</div>
          <div className="occupations">
            <span>software developer</span>
            <span className="pipe">&nbsp;|&nbsp;</span>
            <span>artist</span>
          </div>
        </div>
        <div>
          <img src={constants.siteImages.headshot} className="headshot-img" alt="Alec Thibodeau headshot" />
          <div className="paragraph-title">about</div>
          <p>
            Hello! I'm a software developer and an artist. My specialty is front-end web development with a focus on UI/UX, accessibility and responsive web design.
          </p>
        </div>
        <div className="banner-02" style={{backgroundImage: `url(${constants.siteImages.coolTile})`}}></div>
        <section>
          <div className="paragraph-title">languages &&nbsp;technologies</div>
          <p>
            I've worked regularly with React, React Native, JavaScript, TypeScript, Expo Go, React Native Debugger, Angular, Angular testing (Jasmine), Angular Material,
            Google Material Design, Bootstrap, CSS3/Sass, HTML5, JSON, Chrome DevTools, Slack, Git/GitHub, Atlassian (Bitbucket,
            Jira, Confluence), SVG, Adobe Creative Cloud (XD, Illustrator and Photoshop). I also have some experience with InVision, MySQL, Python,
            Node.js, MongoDB, Ruby on Rails, Express and Mongoose.
          </p>
        </section>
        <div id="projects" className="banner-03" style={{backgroundImage: `url(${constants.siteImages.sunnyTile})`}}></div>
        <section>
          <div className="paragraph-title">projects</div>
          <p>
            My personal projects include a trivia game that uses localStorage to save high scores, an art portfolio site (both of these made with React and TypeScript) and a web shop made with vanilla JavaScript&hellip;
          </p>
          <div className="projects">
            {constants.projectItems.slice(0, 3).map(renderProjectItem)}
          </div>
          <p>
            I made these projects in 2018 while completing General Assembly's Web Development Immersive program (subsequently renamed <a className="text-link" href="https://generalassemb.ly/education/software-engineering-immersive">Software Engineering Immersive</a>)&hellip;
          </p>
          <div className="projects">
            {constants.projectItems.slice(3).map(renderProjectItem)}
          </div>
        </section>
      </main>
      <footer>
        <div className="banner-04" style={{backgroundImage: `url(${constants.siteImages.greenTile})`}}></div>
        <section id="contact">
          <div className="paragraph-title">contact</div>
          <div className="contact-box">
            {constants.contactItems.map(renderContactItem)}
          </div>
          <div>
            <p>
              I code this informational website with React, TypeScript and Sass. I also handle the design for it, using Adobe Illustrator to make custom SVG images. Scroll up to see more <a className="text-link" href="#projects">projects</a>.
            </p>
            <div className="credit">Alec Thibodeau, 2022</div>
          </div>
          <div className="stripes-container">
            {Array(7).fill('stripe').map((item: string, index: number) => {
              return (<div key={`${item}${index}`}></div>);
            })}
          </div>
        </section>
      </footer>
    </div>
  );
}

export default CodePortfolio;
