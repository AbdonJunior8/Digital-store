import { Link } from 'react-router-dom';
import Logo from '../Logo';
import SearchField from './SearchField';
import Navigation from './Navigation';
import miniCart from '../../assets/mini-cart.svg';
import './styles.css';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__top">
          <Link to="/" aria-label="Página inicial">
            <Logo />
          </Link>

          <SearchField />

          <div className="header__actions">
            <Link to="/signup" className="header__signup">Cadastre-se</Link>
            <Link to="/login" className="header__login">Entrar</Link>
            <img src={miniCart} alt="Carrinho de compras" className="header__cart" />
          </div>
        </div>

        <Navigation />
      </div>
    </header>
  );
}
