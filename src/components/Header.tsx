import { Link } from 'react-scroll';

/* Constants */
import constants from '../constants';

/* Helpers */
import helpers from '../helpers';

function Header(): JSX.Element {

  function renderNavItem(item: string, index: number): JSX.Element {
    return (
      <Link
        key={`${item}-${index}`}
        activeClass="active"
        to={item}
        spy={true}
        smooth={true}
        duration={500}
      >
        {helpers.formatTitleCase(item)}
      </Link>
    );
  }

  return (
    <header>
      <nav>
        {constants.navItems.map(renderNavItem)}
      </nav>
    </header>
  );
}

export default Header;
