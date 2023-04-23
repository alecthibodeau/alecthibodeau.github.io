/* Constants */
import constants from '../constants';

/* Interfaces */
import ProjectItem from '../interfaces/ProjectItem';

/* Components */
import Project from './Project';

function Main() {
  const { headshot, tree, pdfResumeDownload, pdfResumeView, coolTile, greenTile, sunnyTile, projectItems  } = constants;

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
      <div className="banner-01" style={{backgroundImage: `url(${greenTile})`}}>
        <img className="tree" src={tree} alt="AT tree logo" />
      </div>
      <div id="about" className="name-and-occupations">
        <h1 className="name">Alec Thibodeau</h1>
        <h2 className="occupations">
          <span>Software Developer</span>
          <span className="pipe">&nbsp;|&nbsp;</span>
          <span>Artist</span>
        </h2>
      </div>
      <div>
        <img src={headshot} className="headshot-img" alt="Alec Thibodeau headshot" />
        <div className="paragraph-title">about</div>
        <p>
          Hello. I'm a software developer and a visual artist. My specialty is front-end
          web development with a focus on UI/UX, accessibility and responsive web
          design. <a href={pdfResumeView} target="_blank" rel="noreferrer" className="text-link">View my resume</a> at GitHub. <a href={pdfResumeDownload} rel="noreferrer" className="text-link">Download my resume</a> as a PDF.
        </p>
      </div>
      <div className="banner-02" style={{backgroundImage: `url(${coolTile})`}}></div>
      <section>
        <div className="paragraph-title">languages &&nbsp;technologies</div>
        <p>
          I've worked regularly with React, React Native, TypeScript, JavaScript,
          Emotion, CSS3/Sass, Expo Go, React Native Debugger, Angular, Angular testing
          (Jasmine), Angular Material, Google Material Design, Bootstrap,
          HTML5, JSON, Git/GitHub and npm.
        </p>
      </section>
      <div id="projects" className="banner-03" style={{backgroundImage: `url(${sunnyTile})`}}></div>
      <section>
        <div className="paragraph-title">projects</div>
        <p>
          My recent personal projects include four websites I've built with React, TypeScript and Sass:
        </p>
        <ul>
          <li>Huetown &mdash; a web shop that consumes PayPal and Mailchimp APIs to, respectively, process orders and record email list subscribers</li>
          <li>Cookie Time Trivia &mdash; a game interface that uses CRUD operations to manage gameplay data with localStorage</li>
          <li>My art portfolio site &mdash; image galleries comprised of components rendered from JSON data</li>
          <li>This code portfolio site you're now viewing</li>
        </ul>
        <div className="projects">
          {projectItems.slice(0, 3).map(renderProjectItem)}
        </div>
      </section>
    </main>
  );
}

export default Main;
