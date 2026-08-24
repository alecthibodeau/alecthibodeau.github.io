/* Components */
import Project from './Project';

/* Interfaces */
import ProjectItem from '../interfaces/ProjectItem';

/* Constants */
import constants from '../constants';

/* Helpers */
import helpers from '../helpers';

function Main(props: { isBreakpointXs: boolean, viewportWidth: number }): JSX.Element {
  const { projectItems, sections } = constants;
  const { formatTitleCase } = helpers;

  const isAboutInfoDisplayed: boolean = true;
  const isHeadshotDisplayed: boolean = true;

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
        {
          isAboutInfoDisplayed ?
          <h2 className="occupations">
            <span>Artist | Coder</span>
          </h2> :
          <h2>&bull;&bull;&bull;</h2>
        }
      </div>
      {
        isHeadshotDisplayed ?
        <img
          src={constants.headshot}
          className="headshot-img"
          alt="Alec Thibodeau headshot"
        /> : null
      }
      {
        isAboutInfoDisplayed ?
        <>
          <section id={sections.about} className={`section-${sections.about}`}>
            <h3 className="section-title">{formatTitleCase(sections.about)}</h3>
            <div className="section-text">
              Hello! I work in art, <a className="text-link" href="https://alect.me/design">design</a> and
              interactive software. JavaScript, CSS and HTML are my go-to coding
              tools, as I craft the user experience, user interfaces, digital
              accessibility and responsive web design.
            </div>
          </section>
          <div className="stripe green"></div>
        </> :
        null
      }
      <section id={sections.projects} className={`section-${sections.projects}`}>
        <h3 className="section-title">
          {`${isAboutInfoDisplayed ? '' : 'Coding '}${formatTitleCase(sections.projects)}`}
        </h3>
        <div className="section-text">
          These are front-end web development projects I've built with React,
          TypeScript, CSS and Vite. I've also designed them with accessible features
          like semantic HTML tags, mobile-first responsiveness and custom color
          palettes: with contrast values
          at <a className="text-link" href="https://www.w3.org/WAI/WCAG2AA-Conformance" target="_blank">WCAG Level AA</a> or
          greater.
        </div>
        <div className={sections.projects}>
          {selectProjects.map(renderProject)}
        </div>
      </section>
    </main>
  );
}

export default Main;
