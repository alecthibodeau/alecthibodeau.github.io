/* Constants */
import constants from '../constants';

/* Interfaces */
import PatternBannerProps from '../interfaces/PatternBannerProps';

/* Helpers */
import helpers from '../helpers';

function PatternBanner(props: PatternBannerProps): JSX.Element {
  const { quarterDiscDirection } = constants;
  const { setRandomNumber } = helpers;

  const maxNumber: number = 4;
  const fourRows: number = 4;
  const eightRows: number = 8;
  const patternRowCount: number = props.isBreakpointXs ? fourRows : eightRows;
  const isPatternVisible: boolean = false;
  const isPatternRandomQuarterDiscs: boolean = false;

  function renderItem(itemName: string, index: number): JSX.Element {
    return (
      <div
        key={`${itemName}-${index}`}
        className={
          isPatternRandomQuarterDiscs
          ? `quarter-disc ${quarterDiscDirection[setRandomNumber(maxNumber)]}`
          : 'pattern-disc-container'
        }>
        {!isPatternRandomQuarterDiscs ? <div></div> : null}
      </div>
    );
  }

  function renderRow(rowName: string, index: number): JSX.Element {
    return (
      <div key={`${rowName}-${index}`} className={rowName}>
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
        ? Array(patternRowCount).fill('pattern-row').map(renderRow)
        : null
      }
    </div>
  );
}

export default PatternBanner;
