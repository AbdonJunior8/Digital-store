import { formatPrice } from '../../utils/formatPrice';
import starIcon from '../../assets/star-icon.svg';
import './styles.css';

/* Caixa de  produto.
 * props: name, reference, stars, rating, price, priceDiscount, description, childre*/

export default function BuyBox({ name, reference, stars, rating, price, priceDiscount, description, children }) {
  return (
    <div className="buy-box">
      <h1 className="buy-box__name">{name}</h1>
      <p className="buy-box__reference">{reference}</p>

      <div className="buy-box__rating">
        <span className="buy-box__stars">
          {stars}
          <img src={starIcon} alt="estrelas" width={16} height={16} />
        </span>
        <span className="buy-box__reviews">({rating} avaliações)</span>
      </div>

      <div className="buy-box__prices">
        {priceDiscount ? (
          <>
            <span className="buy-box__price">{formatPrice(priceDiscount)}</span>
            <span className="buy-box__price buy-box__price--old">{formatPrice(price)}</span>
          </>
        ) : 
        
        (
          <span className="buy-box__price">{formatPrice(price)}</span>
        )}
      </div>

      <div className="buy-box__descriptionn">
        <h2>Descrição do produto</h2>
        <p>{description}</p>

      </div>

      {children}

      <button type="button" className="buy-box__button"> COMPRAR </button>
    </div>
  );
}
