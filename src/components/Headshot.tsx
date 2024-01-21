import { useState } from 'react';

/* Constants */
import constants from '../constants';

function Headshot(): JSX.Element {
  const { headshotPhoto, headshotIcon } = constants;

  const [isHover, setIsHover] = useState(false);
  const imageSource = isHover ? headshotIcon : headshotPhoto;

  return (
    <img
      src={imageSource}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="headshot-img"
      alt={`Alec Thibodeau headshot ${isHover ? 'icon' : 'photo'}`}
    />
  );
}

export default Headshot;
