import { useState } from 'react';

/* Interfaces */
import ProjectItem from '../interfaces/ProjectItem';

function Project(props: ProjectItem): JSX.Element {
  const [isInfoClicked, setIsInfoClicked] = useState(false);

  function handleInfoClick(): void {
    setIsInfoClicked(!isInfoClicked);
  }

  return (
    <>
      <button className="project-details" onClick={handleInfoClick}>
        {
          isInfoClicked ?
          <div className="project-info-container">
            <div className="project-info-title">{props.name}</div>
            <div className="project-info-text-container">
              <div className="project-info-text">{props.infoText}</div>
              <div className="stack">
                <div className="front-end">Front End</div>
                <div>{props.frontEndTechnology}</div>
              </div>
              {
                props.backEndTechnology ?
                <div className="stack">
                  <div className="stack back-end">Back End</div>
                  <div>{props.backEndTechnology}</div>
                </div> :
                null
              }
            </div>
          </div> :
          <img
            className="project-image"
            src={props.image}
            alt={props.altText}
          />
        }
      </button>
      <div className="project-footer">
        <div className="project-footer-title">{props.name}</div>
        <a className="project-footer-link" href={props.website}>Website</a>
        <a className="project-footer-link" href={props.clientRepo}>GitHub</a>
        {
          props.apiRepo ?
          <a href={props.apiRepo}>GitHub (API)</a> :
          null
        }
      </div>
    </>
  );
}

export default Project;
