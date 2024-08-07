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
      <a className="text-link project-link" href={props.website}>
        {
          isInfoClicked ?
          <div className="project-info-container">
            <div className="project-info-title">{props.name}</div>
            <div className="project-info-text-container">
              <div className="project-info-text">{props.infoText}</div>
              <div>
                <div className="stack front-end">Front End:</div>
                <div>{props.frontEndTechnology}</div>
              </div>
              {props.backEndTechnology && <div>
                <div className="stack back-end">Back End:</div>
                <div>{props.backEndTechnology}</div>
              </div>}
            </div>
          </div> :
          <img
            className="project-image"
            src={props.image}
            alt={props.altText}
          />
        }
      </a>
      <div className="project-actions">
        <div className="project-title">{props.name}</div>
        <button
          className={isInfoClicked ? 'clicked' : 'not-clicked'}
          onClick={handleInfoClick}>
          Info
        </button>
        <a href={props.clientRepo}>GitHub</a>
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
