/* Interfaces */
import ProjectItem from '../interfaces/ProjectItem';

function Project(props: ProjectItem) {
  return (
    <>
      <a href={props.website}>
        <div className="project-info-outer">
          <div className="project-info-inner">
            <div className="project-info-title">{props.name}</div>
            <div className="project-info-text">
              <div>{props.infoText}</div>
              <div>
                <div className="front-end">Front End:</div>
                <div>{props.frontEndTechnology}</div>
              </div>
              {props.backEndTechnology && <div>
                <div className="back-end">Back End:</div>
                <div>{props.backEndTechnology}</div>
              </div>}
            </div>
          </div>
        </div>
        <img
          className="project-img"
          src={props.image}
          alt={props.altText} />
      </a>
      <div className="project-routing-links">
        <div className="project-title">{props.name}</div>
        <a href={props.website}>Website</a>
        <a href={props.clientRepo}>Client Repo</a>
        {props.apiRepo && <a href={props.apiRepo}>API Repo</a>}
      </div>
    </>
  );
}

export default Project;
