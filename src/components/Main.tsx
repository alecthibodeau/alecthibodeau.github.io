/* Components */
import Project from './Project';
import PatternBanner from './PatternBanner';

/* Interfaces */
import ProjectItem from '../interfaces/ProjectItem';

/* Constants */
import constants from '../constants';

/* Helpers */
import helpers from '../helpers';

function Main(props: { isBreakpointXs: boolean, viewportWidth: number }): JSX.Element {
  const { projectItems, sections } = constants;
  const { formatTitleCase } = helpers;

  const selectProjects = projectItems.slice(0, 4);

  /**
   * Spread attributes can be useful but they also make it easy to pass unnecessary props
   * to components that don’t care about them or to pass invalid HTML attributes to the DOM.
   * We recommend using this syntax sparingly. - React Docs
   */
  function renderProject(item: ProjectItem, index: number): JSX.Element {
    return <Project key={`${item.name}-${index}`} {...item} />;
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
        <img
          src={constants.headshotIcon}
          className="headshot-img"
          alt="Alec Thibodeau headshot"
        />
        <h3 className="section-title">{formatTitleCase(sections.about)}</h3>
        <p>
          When I'm not writing software for interactive products and projects I'm
          crafting designs with digital methods or traditional techniques. My software
          focus is front-end web development, the user experience, user interfaces,
          digital accessibility and responsive web design.
        </p>
      </section>
      <PatternBanner
        id={sections.projects}
        isBreakpointXs={props.isBreakpointXs}
        viewportWidth={props.viewportWidth}
        color="blue"
      />
      <section>
        <h3 className="section-title">{formatTitleCase(sections.projects)}</h3>
        <p>
          I've built these coding projects with React and TypeScript. I've also designed
          them with features like semantic HTML, accessible elements, mobile-first
          responsiveness and custom color palettes.
        </p>
        <div className={sections.projects}>
          {selectProjects.map(renderProject)}
        </div>
      </section>
    </main>
  );
}

export default Main;
