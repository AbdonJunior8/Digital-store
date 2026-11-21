import Logo from '../Logo';
import FooterInfo from './FooterInfo';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import twitter from '../../assets/twitter.svg';
import './styles.css';

const socials = [
  { name: 'Facebook', icon: facebook, href: 'https://www.facebook.com' },
  { name: 'Instagram', icon: instagram, href: 'https://www.instagram.com' },
  { name: 'Twitter', icon: twitter, href: 'https://twitter.com' },
];

const columns = [
  {
    title: 'Informações',
    informations: [
      { text: 'Sobre Drip Store', link: '/about' },
      { text: 'Segurança', link: '/security' },
      { text: 'Wishlist', link: '/wishlist' },
      { text: 'Blog', link: '/blog' },
      { text: 'Trabalhe conosco', link: '/jobs' },
      { text: 'Meus Pedidos', link: '/orders' },
    ],
  },
  {
    title: 'Categorias',
    informations: [
      { text: 'Camisetas', link: '/products?filter=camisetas' },
      { text: 'Calças', link: '/products?filter=calcas' },
      { text: 'Bonés', link: '/products?filter=bones' },
      { text: 'Headphones', link: '/products?filter=headphones' },
      { text: 'Tênis', link: '/products?filter=tenis' },
    ],
  },
  {
    title: 'Contato',
    informations: [
      { text: 'Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161' },
      { text: '(85) 3051-3411' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__brand">
            <Logo variant="footer" />
            <p className="footer__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua
            </p>
            
            <div className="footer__socials">
              {socials.map(({ name, icon, href }) => (
                <a key={name} href={href} target="_blank" rel="noreferrer" aria-label={name}>
                  <img src={icon} alt="" />
                </a>
              ))}
            </div>
          </div>

          {columns.map(({ title, informations }) => (
            <FooterInfo key={title} title={title} informations={informations} />
          ))}
        </div>

        <hr className="footer__divider" />
        <p className="footer__copyright">© {new Date().getFullYear()} Digital Store</p>
      </div>
    </footer>
  );
}
