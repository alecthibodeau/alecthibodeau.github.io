/* Constants */
import constants from '../constants';

/* Interfaces */
import WedgeBannerProps from '../interfaces/WedgeBannerProps';

/* Helpers */
import helpers from '../helpers';

function WedgeBanner(props: WedgeBannerProps): JSX.Element {
  const { wedgeDirection } = constants;
  const { formatTitleCase, setRandomNumber } = helpers;

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
    <div id={`banner${formatTitleCase(props.id)}`} className={`banner-${props.color}`}>
      {Array(props.isBreakpointXs ? fourRows : eightRows).fill('wedge-row').map(renderWedgeRow)}
    </div>
  );
}

export default WedgeBanner;
