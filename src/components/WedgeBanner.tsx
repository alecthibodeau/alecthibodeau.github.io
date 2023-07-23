/* Constants */
import constants from '../constants';

/* Helpers */
import helpers from '../helpers';

function WedgeBanner(props: { id?: string, isBreakpointXs: boolean, viewportWidth: number, index: number }): JSX.Element {
  const { wedgeDirection } = constants;
  const { setRandomNumber } = helpers;

  const maxNumber: number = 4;
  const fourRows: number = 4;
  const eightRows: number = 8;

  function renderWedge(item: string, index: number): JSX.Element {
    return (
      <div
        key={`${item}-${index}`}
        className={`wedge ${wedgeDirection[setRandomNumber(maxNumber)]}`}>
      </div>
    );
  }

  function renderWedgeRow(item: string, index: number): JSX.Element {
    return (
      <div key={`${item}-${index}`} className="wedge-row">
        {Array(Math.floor(props.viewportWidth/24)).fill('wedge').map(renderWedge)}
      </div>
    );
  }

  return (
    <div id={props.id ? props.id : `banner${props.index}`} className={`banner-0${props.index}`}>
      {Array(props.isBreakpointXs ? fourRows : eightRows).fill('wedge-row').map(renderWedgeRow)}
    </div>
  );
}

export default WedgeBanner;
