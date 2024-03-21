/* Constants */
import constants from '../constants';

/* Interfaces */
import PatternBannerProps from '../interfaces/PatternBannerProps';

/* Helpers */
import helpers from '../helpers';

function PatternBanner(props: PatternBannerProps): JSX.Element {
  const { sections, quarterCircleDirection } = constants;
  const { formatTitleCase, setRandomNumber } = helpers;

  const maxNumber: number = 4;
  const fourRows: number = 4;
  const eightRows: number = 8;
  const isPatternRandomQuarterCircles: boolean = false;

  function formatID(id: string) {
    return id === sections.about ? `banner${formatTitleCase(id)}` : id;
  }

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
    <div id={formatID(props.id)} className={`banner-${props.color}`}>
      {Array(props.isBreakpointXs ? fourRows : eightRows).fill('pattern-row').map(renderPatternRow)}
    </div>
  );
}

export default PatternBanner;
