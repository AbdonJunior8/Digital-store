import { Link } from 'react-router-dom';
import './styles.css';

/**
 * Seção com título e, opcionalmente, um link à direita.
 * props: title, titleAlign ("left" | "center"), link ({ text, href }), children
 */
export default function Section({ title, titleAlign = 'left', link, children }) {
  const isInternal = link && link.href.startsWith('/');

  return (
    <section className="section">
      <div className={`section__header section__header--${titleAlign}`}>
        <h2 className="section__title">{title}</h2>

        {link &&
          (isInternal ? (
            <Link to={link.href} className="section__link">{link.text}</Link>
          ) : (
            <a href={link.href} className="section__link">{link.text}</a>
          ))}
      </div>

      {children}
    </section>
  );
}
