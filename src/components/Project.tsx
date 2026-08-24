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
            <div className="project-info-inner-title">{props.name}</div>
            <div className="project-info-text-wrapper">
              <div className="project-info-text">{props.infoText}</div>
              <div className="project-info-stack-wrapper">
                <div className="project-info-stack-title front-end">Front End:</div>
                <div>{props.frontEndTechnology}</div>
              </div>
              {
                props.backEndTechnology ?
                <div className="project-info-stack-wrapper">
                  <div className="project-info-stack-title back-end">Back End:</div>
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
      <div className="project-info-footer-title">{props.name}</div>
      <div className="project-info-footer-links">
        <a className="text-link" href={props.website} target="_blank">website</a>
        <span>&nbsp;|&nbsp;</span>
        <a className="text-link" href={props.clientRepo}>code</a>
        {
          props.apiRepo ?
          <>
            <span>&nbsp;|&nbsp;</span>
            <a href={props.apiRepo}>api</a>
          </> :
          null
        }
      </div>
    </div>
  );
}

export default Project;
