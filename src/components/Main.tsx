/* Constants */
import constants from '../constants';

/* Interfaces */
import ProjectItem from '../interfaces/ProjectItem';

/* Components */
import Project from './Project';

/* Documents */
import pdfResume from '../assets/documents/alec_thibodeau_resume_web.pdf';

function Main() {
  /**
   * Spread attributes can be useful but they also make it easy to pass unnecessary props
   * to components that don’t care about them or to pass invalid HTML attributes to the DOM.
   * We recommend using this syntax sparingly. - React Docs
   */
  function renderProjectItem(item: ProjectItem, index: number) {
    return (
      <div key={`${item.name}${index}`} className="project-container">
        <Project {...item} />
      </div>
    );
  }

  return (
    <main>
      <div className="banner-01" style={{backgroundImage: `url(${constants.greenTile})`}}>
        <img className="tree" src={constants.tree} alt="AT tree logo" />
      </div>
      <div id="about" className="name-and-occupations">
        <div className="name">Alec Thibodeau</div>
        <div className="occupations">
          <span>Software Developer</span>
          <span className="pipe">&nbsp;|&nbsp;</span>
          <span>Artist</span>
        </div>
      </div>
      <div>
        <img src={constants.headshot} className="headshot-img" alt="Alec Thibodeau headshot" />
        <div className="paragraph-title">about</div>
        <p>
          Hello. I'm a software developer and an artist. My specialty is front-end
          web development with a focus on UI/UX, accessibility and responsive web
          design. <a href={pdfResume} target="_blank" className="text-link">See my resume.</a>
        </p>
      </div>
      <div className="banner-02" style={{backgroundImage: `url(${constants.coolTile})`}}></div>
      <section>
        <div className="paragraph-title">languages &&nbsp;technologies</div>
        <p>
          I've worked regularly with React, React Native, TypeScript, JavaScript,
          Angular, Emotion, Expo Go, React Native Debugger, Angular testing
          (Jasmine), Angular Material, Google Material Design, Bootstrap, CSS3/Sass,
          HTML5, JSON, Git/GitHub, Atlassian (Bitbucket, Jira, Confluence), SVG,
          Adobe Creative Cloud (XD, Illustrator and Photoshop). I also have some
          experience with Node.js, Express, MongoDB, MySQL, Python and InVision.
        </p>
      </section>
      <div id="projects" className="banner-03" style={{backgroundImage: `url(${constants.sunnyTile})`}}></div>
      <section>
        <div className="paragraph-title">projects</div>
        <p>
          My personal projects include a React/TypeScript trivia challenge that uses CRUD operations for managing data with localStorage, a React/TypeScript art portfolio site that builds components from JSON data and a web shop made with vanilla JavaScript&hellip;
        </p>
        <div className="projects">
          {constants.projectItems.slice(0, 3).map(renderProjectItem)}
        </div>
      </section>
    </main>
  );
}

export default Main;
