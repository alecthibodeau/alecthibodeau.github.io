/* Constants */
import constants from '../constants';

/* Interfaces */
import PatternBannerProps from '../interfaces/PatternBannerProps';

/* Helpers */
import helpers from '../helpers';

function PatternBanner(props: PatternBannerProps): JSX.Element {
  const { quarterCircleDirection } = constants;
  const { setRandomNumber } = helpers;

  const maxNumber: number = 4;
  const fourRows: number = 4;
  const eightRows: number = 8;
  const patternRowCount: number = props.isBreakpointXs ? fourRows : eightRows;
  const isPatternVisible: boolean = false;
  const isPatternRandomQuarterCircles: boolean = false;

  function renderItem(item: string, index: number): JSX.Element {
    return (
      <div
        key={`${item}-${index}`}
        className={
            isPatternRandomQuarterCircles
            ? `quarter-circle ${quarterCircleDirection[setRandomNumber(maxNumber)]}`
            : 'pattern-disc-container'
        }>
        {!isPatternRandomQuarterCircles ? <div></div> : null}
      </div>
    );
  }

  function renderPatternRow(item: string, index: number): JSX.Element {
    return (
      <div key={`${item}-${index}`} className="pattern-row">
        {Array(Math.floor(props.viewportWidth/24)).fill('item').map(renderItem)}
      </div>
    );
  }

  return (
    <div
      id={props.id}
      className={`banner-${props.color}${!isPatternVisible ? ' solid' : ''}`}
    >
      {
        isPatternVisible
        ? Array(patternRowCount).fill('pattern-row').map(renderPatternRow)
        : null
      }
    </div>
  );
}

export default PatternBanner;
