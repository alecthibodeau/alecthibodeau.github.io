/* Constants */
import constants from '../constants';

function Header() {
  function renderNavItem(item: string, index: number) {
    return (
      <a key={`${item}${index}`} href={`#${item}`}>
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
