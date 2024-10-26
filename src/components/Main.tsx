/* Components */
import Headshot from './Headshot';
import Project from './Project';
import PatternBanner from './PatternBanner';

/* Interfaces */
import ProjectItem from '../interfaces/ProjectItem';

/* Constants */
import constants from '../constants';

/* Helpers */
import helpers from '../helpers';

function Main(props: { isBreakpointXs: boolean, viewportWidth: number }): JSX.Element {
  const { projectItems, sections, hypertextReference } = constants;
  const { formatTitleCase } = helpers;

  const selectProjects = projectItems.slice(1, 4);

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
      <div className="name-and-occupations">
        <h1 className="name">Alec Thibodeau</h1>
        <h2 className="occupations">
          <span>Software Developer</span>
          <span className="pipe">&nbsp;|&nbsp;</span>
          <span>Artist</span>
        </h2>
      </div>
      <section id={sections.about}>
        <Headshot />
        <h3 className="section-title">{formatTitleCase(sections.about)}</h3>
        <p>
          I'm a software developer and a visual artist, focusing on front-end web
          development, the user experience (UX), user interfaces (UI), digital
          accessibility and responsive web design. I'm happy to craft design
          elements and website prototypes myself or collaborate directly with UX
          designers.
        </p>
      </section>
      <PatternBanner
        id={sections.technologies}
        isBreakpointXs={props.isBreakpointXs}
        viewportWidth={props.viewportWidth}
        color="blue"
      />
      <section>
        <h3 className="section-title">{formatTitleCase(sections.technologies)}</h3>
        <p>
          I have professional experience with React, React Native, TypeScript,
          JavaScript, Git, GitHub, Bitbucket, npm, Emotion (CSS-in-JS), CSS3, Sass, Figma,
          Storybook, Style Dictionary, Linux, Expo Go, React Native Debugger, Angular,
          Angular testing (Jasmine), Angular Material, Google Material Design, Bootstrap,
          HTML5, JSON, Postman, Lucidchart and Adobe Creative Cloud (Photoshop, Illustrator, XD).
        </p>
      </section>
      <PatternBanner
        id={sections.projects}
        isBreakpointXs={props.isBreakpointXs}
        viewportWidth={props.viewportWidth}
        color="orange"
      />
      <section>
        <h3 className="section-title">{formatTitleCase(sections.projects)}</h3>
        <p>
          My personal coding projects include four websites built with React and
          TypeScript. These are live and interactive &mdash; and their code is
          viewable at <a href={hypertextReference.gitHub} className="text-link">GitHub</a>.
          I also handle their UX and UI design: with features like semantic HTML,
          accessible elements, mobile-first responsiveness and custom color palettes.
        </p>
        <ul>
          {selectProjects.map(renderProjectDescription)}
          <li>
            <span>This portfolio site you're now viewing (</span>
            <a className="text-link" href={hypertextReference.codePortfolio}>
              see the code
            </a>
            <span>)</span>
          </li>
        </ul>
        <div className={sections.projects}>
          {selectProjects.map(renderProjectItem)}
        </div>
      </section>
    </main>
  );
}

export default Main;
