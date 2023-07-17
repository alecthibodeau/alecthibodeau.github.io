/* Constants */
import constants from '../constants';

/* Interfaces */
import ProjectItem from '../interfaces/ProjectItem';

/* Components */
import Project from './Project';

/* Helpers */
import helpers from '../helpers';

function Main(): JSX.Element {
  const {
    headshot,
    tree,
    projectItems,
    sections,
    hypertextReference
  } = constants;

  /**
   * Spread attributes can be useful but they also make it easy to pass unnecessary props
   * to components that don’t care about them or to pass invalid HTML attributes to the DOM.
   * We recommend using this syntax sparingly. - React Docs
   */
  function renderProjectItem(item: ProjectItem, index: number): JSX.Element {
    return (
      <div key={`${item.name}-${index}`} className="project-container">
        <Project {...item} />
      </div>
    );
  }

  function renderProjectDescription(item: ProjectItem, index: number): JSX.Element {
    return (
      <li key={`${item.name}-${index}`}>
        <a href={item.website} className="text-link">
          {item.name}
        </a> &mdash; {item.description}
      </li>
    );
  }

  return (
    <main>
      <div className="banner-01">
        <img className="tree" src={tree} alt="AT tree logo" />
      </div>
      <div id={sections.about} className="name-and-occupations">
        <h1 className="name">Alec Thibodeau</h1>
        <h2 className="occupations">
          <span>Software Developer</span>
          <span className="pipe">&nbsp;|&nbsp;</span>
          <span>Artist</span>
        </h2>
      </div>
      <section>
        <img src={headshot} className="headshot-img" alt="Alec Thibodeau headshot" />
        <div className="section-title">{helpers.formatTitleCase(sections.about)}</div>
        <p>
          Hello. I'm a software developer and a visual artist. My specialty is front-end
          web development with a focus on UI/UX, accessibility and responsive web
          design. I'm presently exploring ways to combine coding and visual expression.
        </p>
      </section>
      <div className="banner-02"></div>
      <section>
        <div className="section-title">{helpers.formatTitleCase(sections.technologies)}</div>
        <p>
          I've worked with React, React Native, TypeScript, JavaScript, Emotion,
          CSS3/Sass, Expo Go, React Native Debugger, Angular, Angular testing
          (Jasmine), Angular Material, Google Material Design, Bootstrap, HTML5, JSON,
          Postman, Git/GitHub, npm, Storybook, Lucidchart and Adobe Creative Cloud.
        </p>
      </section>
      <div id={sections.projects} className="banner-03"></div>
      <section>
        <div className="section-title">{helpers.formatTitleCase(sections.projects)}</div>
        <p>
          My personal projects include four web applications built with React, TypeScript and Sass.
          These websites are live and interactive &mdash; and their code is viewable at <a href={hypertextReference.gitHub} className="text-link">GitHub</a>.
          I also design the UI and UX for these sites (and I create their content), with features including semantic HTML, accessible elements, custom color palettes, original SVG images and mobile-first responsiveness.
        </p>
        <ul>
          {projectItems.slice(0, 3).map(renderProjectDescription)}
          <li>This code portfolio site you're now viewing</li>
        </ul>
        <div className={sections.projects}>
          {projectItems.slice(0, 3).map(renderProjectItem)}
        </div>
      </section>
    </main>
  );
}

export default Main;
