import React from 'react';
import { NavigationLink } from '../../lib/types/responses';

interface NavLinksProps {
  links: NavigationLink[];
  onNavigate: (url: string | null) => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ links, onNavigate }) => {
  return (
    <nav>
      <ul className="pagination">
        {links.map((link, index) => (
          <li
            key={index}
            className={`page-item ${link.active ? 'active' : ''} ${link.url === null ? 'disabled' : ''} mx-1`}
          >
            <button
              className="page-link"
              onClick={() => onNavigate(link.url)}
              disabled={link.url === null}
            >
              {link.label.replace('&laquo;', '«').replace('&raquo;', '»')}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
