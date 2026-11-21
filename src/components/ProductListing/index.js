import ProductCard from '../ProductCard';
import './styles.css';

/**
 * Lista de produtos em grade.
 * props: products (array), columns (nº de colunas, padrão 4)
 */
export default function ProductListing({ products = [], columns = 4 }) {
  if (products.length === 0) {
    return <p className="product-listing__empty">Nenhum produto encontrado.</p>;
  }

  return (
    <div className="product-listing" style={{ '--columns': columns }}>
      {products.map((product) => (
        <ProductCard key={product.id ?? product.name} {...product} />
      ))}
    </div>
  );
}
