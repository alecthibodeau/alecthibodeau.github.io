/* Constants */
import constants from '../constants';

/* Helpers */
import helpers from '../helpers';

function Header(): JSX.Element {
  const isHeaderInfoDisplayed: boolean = false;

  function renderNavItem(item: string, index: number): JSX.Element {
    return (
      <a key={`${item}-${index}`} href={`#${item}`}>
        {helpers.formatTitleCase(item)}
      </a>
    );
  }

  return (
    <header>
      {
        isHeaderInfoDisplayed ?
        <nav>
          {constants.navItems.map(renderNavItem)}
        </nav> :
        null
      }
    </header>
  );
}

export default Header;
