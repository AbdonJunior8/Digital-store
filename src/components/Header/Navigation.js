import { NavLink } from 'react-router-dom';

const links = [
  { text: 'Home', to: '/', end: true },
  { text: 'Produtos', to: '/products' },
  { text: 'Categorias', to: '/categories' },
  { text: 'Meus Pedidos', to: '/orders' },
];

/** Navegação principal: o link da página atual fica colorido e com linha embaixo. */
export default function Navigation() {
  return (
    <nav className="nav" aria-label="Navegação principal">
      {links.map(({ text, to, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          className={({ isActive }) => (isActive ? 'nav__link nav__link--active' : 'nav__link')}
        >
          {text}
        </NavLink>
      ))}
    </nav>
  );
}
