/* Constants */
import constants from '../constants';

/* Interfaces */
import ProjectItem from '../interfaces/ProjectItem';

/* Documents */
import pdfResume from '../assets/documents/alec_thibodeau_resume_web.pdf';

function Main() {
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
            src={item.image}
            alt={item.altText} />
        </a>
        <div className="project-routing-links">
          <div className="project-title">{item.name}</div>
          <a href={item.website}>Website</a>
          <a href={item.clientRepo}>Client Repository</a>
          {item.apiRepo && <a href={item.apiRepo}>API Repository</a>}
        </div>
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
          I've worked regularly with React, React Native, Angular, JavaScript,
          TypeScript, Emotion, Expo Go, React Native Debugger, Angular testing
          (Jasmine), Angular Material, Google Material Design, Bootstrap, CSS3/Sass,
          HTML5, JSON, Chrome DevTools, Slack, Git/GitHub, Atlassian (Bitbucket,
          Jira, Confluence), SVG, Adobe Creative Cloud (XD, Illustrator and
          Photoshop). I also have some experience with InVision, MySQL, Python,
          Node.js, MongoDB and Express.
        </p>
      </section>
      <div id="projects" className="banner-03" style={{backgroundImage: `url(${constants.sunnyTile})`}}></div>
      <section>
        <div className="paragraph-title">projects</div>
        <p>
          My personal projects include a trivia game that uses localStorage to
          save high scores, an art portfolio site (both of these made with React
          and TypeScript) and a web shop made with vanilla JavaScript&hellip;
        </p>
        <div className="projects">
          {constants.projectItems.slice(0, 3).map(renderProjectItem)}
        </div>
      </section>
    </main>
  );
}

export default Main;
