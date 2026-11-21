import { Link } from 'react-router-dom';

/**
 * Coluna de informações do rodapé.
 * props:
 *  - title: título da coluna
 *  - informations: [{ text, link? }] -> renderizado dinamicamente
 */
export default function FooterInfo({ title, informations = [] }) {
  return (
    <div className="footer-info">
      <h4 className="footer-info__title">{title}</h4>
      <ul className="footer-info__list">
        {informations.map(({ text, link }) => (
          <li key={text}>{link ? <Link to={link}>{text}</Link> : text}</li>
        ))}
      </ul>
    </div>
  );
}
