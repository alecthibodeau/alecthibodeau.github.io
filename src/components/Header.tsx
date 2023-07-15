/* Constants */
import constants from '../constants';

function Header(): JSX.Element {

  function renderNavItem(item: string, index: number): JSX.Element {
    return (
      <a key={`${item}-${index}`} href={`#${item}`}>
        {item}
      </a>
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
