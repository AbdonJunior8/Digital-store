import { Link } from 'react-router-dom';
import { formatPrice } from '../../utils/formatPrice';
import './styles.css';

/**
 * Cartão de produto (imagem 292x321, nome, preço e preço com desconto).
 * props: id, image (ou imagem), name, price, priceDiscount
 */
export default function ProductCard({ id, image, imagem, name, price, priceDiscount }) {
  const content = (
    <>
      <div className="product-card__image">
        <img src={image ?? imagem} alt={name} width={292} height={321} />
      </div>

      <h3 className="product-card__name">{name}</h3>

      <div className="product-card__prices">
        <span className={priceDiscount ? 'product-card__price product-card__price--old' : 'product-card__price'}>
          {formatPrice(price)}
        </span>
        {priceDiscount && (
          <span className="product-card__price">{formatPrice(priceDiscount)}</span>
        )}
      </div>
    </>
  );

  return id ? (
    <Link to={`/product/${id}`} className="product-card">{content}</Link>
  ) : (
    <div className="product-card">{content}</div>
  );
}
