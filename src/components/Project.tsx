import { useState } from 'react';

/* Interfaces */
import ProjectItem from '../interfaces/ProjectItem';

function Project(props: ProjectItem): JSX.Element {
  const [isInfoClicked, setIsInfoClicked] = useState(false);

  function handleInfoClick(): void {
    setIsInfoClicked(!isInfoClicked);
  }

  return (
    <div className="project">
      <button className="project-details" onClick={handleInfoClick}>
        {
          isInfoClicked ?
          <div className="project-info-wrapper">
            <div className="project-info-title">{props.name}</div>
            <div className="project-info-text-wrapper">
              <div className="project-info-text">{props.infoText}</div>
              <div className="stack-wrapper">
                <div className="stack-title front-end">Front End</div>
                <div>{props.frontEndTechnology}</div>
              </div>
              {
                props.backEndTechnology ?
                <div className="stack-wrapper">
                  <div className="stack-title back-end">Back End</div>
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
      <div className="project-footer-title">{props.name}</div>
      <div>
        <a className="text-link" href={props.website} target="_blank">Website</a>
        <span>&nbsp;|&nbsp;</span>
        <a className="text-link" href={props.clientRepo}>GitHub</a>
        {
          props.apiRepo ?
          <>
            <span>&nbsp;|&nbsp;</span>
            <a href={props.apiRepo}>GitHub (API)</a>
          </> :
          null
        }
      </div>
    </div>
  );
}

export default Project;
