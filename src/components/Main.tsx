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
            <span>Artist</span>
            <span className="pipe">&nbsp;|&nbsp;</span>
            <span>Coder</span>
          </h2> :
          <h2>&bull;&bull;&bull;</h2>
        }
      </div>
      {
        isAboutInfoDisplayed ?
        <>
          <section id={sections.about}>
            { isHeadshotDisplayed ?
              <img
                src={constants.headshot}
                className="headshot-img"
                alt="Alec Thibodeau headshot"
              /> : null
            }
            <h3 className="section-title">{formatTitleCase(sections.about)}</h3>
            <p>
              When I'm not writing software for interactive projects I'm
              crafting designs with various techniques. My software
              focus is front-end web development, the user experience, user interfaces,
              digital accessibility and responsive web design.
            </p>
          </section>
          <div className="stripe blue"></div>
        </> :
        null
      }
      <section id={sections.projects} className={`section-${sections.projects}`}>
        <h3 className="section-title">
          {`${isAboutInfoDisplayed ? '' : 'Coding '}${formatTitleCase(sections.projects)}`}
        </h3>
        <p>
          These are front-end web development projects I've built with React,
          TypeScript, CSS and Vite. I've also designed them with accessible features
          like semantic HTML tags, mobile-first responsiveness and custom color
          palettes with contrast values
          at <a className="text-link" href="https://www.w3.org/WAI/WCAG2AA-Conformance" target="_blank">WCAG Level AA</a> or
          greater.
        </p>
        <div className={sections.projects}>
          {selectProjects.map(renderProject)}
        </div>
      </section>
    </main>
  );
}

export default Main;
