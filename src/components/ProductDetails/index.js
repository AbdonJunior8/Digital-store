import Gallery from '../Gallery';
import BuyBox from '../BuyBox';
import ProductOptions from '../ProductOptions';
import './styles.css';

const sizes = ['39', '40', '41', '42', '43'];
const colors = ['#6FEEFF', '#FF6969', '#5E5E5E', '#6D70B7'];

/** Bloco principal da página do produto: galeria + caixa de compra com variações. */
export default function ProductDetails({ product }) {
  return (
    <div className="product-details">
      <Gallery images={product.images} width="700px" height="570px" radius="4px" showThumbs />

      <BuyBox
        name={product.name}
        reference={product.reference}
        stars={product.stars}
        rating={product.rating}
        price={product.price}
        priceDiscount={product.priceDiscount}
        description={product.description}
      >
        <div className="product-details__group">
          <h3>Tamanho</h3>
          <ProductOptions options={sizes} shape="square" radius="4px" type="text" />
        </div>

        <div className="product-details__group">
          <h3>Cor</h3>
          <ProductOptions options={colors} shape="circle" type="color" />
        </div>
      </BuyBox>
    </div>
  );
}
