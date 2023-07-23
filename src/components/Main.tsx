/* Constants */
import constants from '../constants';
import WedgeBanner from './WedgeBanner';

/* Interfaces */
import ProjectItem from '../interfaces/ProjectItem';

/* Components */
import Project from './Project';

/* Helpers */
import helpers from '../helpers';

function Main(props: { isBreakpointXs: boolean, viewportWidth: number }): JSX.Element {
  const {
    headshot,
    projectItems,
    sections,
    hypertextReference
  } = constants;

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
        <img src={headshot} className="headshot-img" alt="Alec Thibodeau headshot" />
        <div className="section-title">{formatTitleCase(sections.about)}</div>
        <p>
          Hello. I'm a software developer and a visual artist. My focus in
          software is on the front end of web development, especially the user interface (UI),
          the user experience (UX), digital accessibility and responsive web design.
          I enjoy looking for new ways to combine coding and visual expression.
        </p>
      </section>
      <WedgeBanner
        isBreakpointXs={props.isBreakpointXs}
        viewportWidth={props.viewportWidth}
        index={1}
      />
      <section>
        <div className="section-title">{formatTitleCase(sections.technologies)}</div>
        <p>
          I've used React, React Native, TypeScript, JavaScript, Emotion,
          CSS3/Sass, Expo Go, React Native Debugger, Angular, Angular testing
          (Jasmine), Angular Material, Google Material Design, Bootstrap, HTML5, JSON,
          Postman, Git/GitHub, npm, Storybook, Lucidchart and Adobe Creative Cloud.
        </p>
      </section>
      <WedgeBanner
        id={sections.projects}
        isBreakpointXs={props.isBreakpointXs}
        viewportWidth={props.viewportWidth}
        index={2}
      />
      <section>
        <div className="section-title">{formatTitleCase(sections.projects)}</div>
        <p>
          My personal coding projects include four web applications built with React,
          TypeScript and Sass. These are live and interactive &mdash; and their code is
          viewable at <a href={hypertextReference.gitHub} className="text-link">GitHub</a>.
          I also handle their UI and UX design: with features like semantic HTML,
          accessible elements, mobile-first responsiveness and custom color palettes.
        </p>
        <ul>
          {selectProjects.map(renderProjectDescription)}
          <li>This code portfolio site you're now viewing</li>
        </ul>
        <div className={sections.projects}>
          {selectProjects.map(renderProjectItem)}
        </div>
      </section>
    </main>
  );
}

export default Main;
