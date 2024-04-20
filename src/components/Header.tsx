/* Constants */
import constants from '../constants';

/* Helpers */
import helpers from '../helpers';

function Header(): JSX.Element {

  function renderNavItem(item: string, index: number): JSX.Element {
    return (
      <a key={`${item}-${index}`} href={`#${item}`}>
        {helpers.formatTitleCase(item)}
      </a>
    );
  }

  return (
    <header>
      <nav
        onClick={(event: React.SyntheticEvent) => {
          event.preventDefault();
          const target = event.target as HTMLAnchorElement;
          const id = target.getAttribute('href')?.replace('#', '');
          const element = document.getElementById(String(id));
          element?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        {constants.navItems.map(renderNavItem)}
      </nav>
    </header>
  );
}

export default Header;
