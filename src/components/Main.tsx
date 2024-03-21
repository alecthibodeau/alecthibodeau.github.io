/* Constants */
import constants from '../constants';

/* Interfaces */
import ProjectItem from '../interfaces/ProjectItem';

/* Components */
import Headshot from './Headshot';
import Project from './Project';
import PatternBanner from './PatternBanner';

/* Helpers */
import helpers from '../helpers';

function Main(props: { isBreakpointXs: boolean, viewportWidth: number }): JSX.Element {
  const { projectItems, sections, hypertextReference } = constants;

  const { formatTitleCase } = helpers;

  const selectProjects = projectItems.slice(0, 3);

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
        <div className="section-title">{formatTitleCase(sections.about)}</div>
        <p>
          Hello. I'm a software developer specializing in the front end, user experience (UX),
          user interfaces (UI), digital accessibility and responsive web design.
          With a background in art and design I enjoy working directly
          with UX designers and sharing a common visual language with them.
        </p>
      </section>
      <PatternBanner
        id={sections.about}
        isBreakpointXs={props.isBreakpointXs}
        viewportWidth={props.viewportWidth}
        color="blue"
      />
      <section>
        <div className="section-title">{formatTitleCase(sections.technologies)}</div>
        <p>
          I have experience with React, React Native, TypeScript, JavaScript, Emotion (CSS-in-JS),
          CSS3/Sass, Figma, Storybook, Style Dictionary, Expo Go, React Native Debugger, Angular, Angular testing
          (Jasmine), Angular Material, Google Material Design, Bootstrap, HTML5, JSON,
          Postman, Git/GitHub, npm, Storybook, Lucidchart and Adobe Creative Cloud.
        </p>
      </section>
      <PatternBanner
        id={sections.projects}
        isBreakpointXs={props.isBreakpointXs}
        viewportWidth={props.viewportWidth}
        color="red"
      />
      <section>
        <div className="section-title">{formatTitleCase(sections.projects)}</div>
        <p>
          My personal coding projects include four web applications built with React,
          TypeScript and Sass. These are live and interactive &mdash; and their code is
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
