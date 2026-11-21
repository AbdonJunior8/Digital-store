import { Link, useParams } from 'react-router-dom';
import Layout from '../Layout';
import Section from '../../components/Section';
import ProductDetails from '../../components/ProductDetails';
import ProductListing from '../../components/ProductListing';
import products from '../../data/products';
import './styles.css';

export default function ProductViewPage() {
  const { id } = useParams();
  const product = products.find((item) => String(item.id) === id);

  if (!product) {
    return (
      <Layout>
        <div className="container not-found">
          <h1>Produto não encontrado</h1>
          <Link to="/products">Ver todos os produtos</Link>
        </div>
      </Layout>
    );
  }

  const related = products.filter((item) => item.id !== product.id).slice(0, 4);

  return (
    <Layout>
      <div className="container product-view">
        <ProductDetails product={product} />

        <Section title="Produtos recomendados" titleAlign="left" link={{ text: 'Ver todos', href: '/products' }}>
          <ProductListing products={related} columns={4} />
        </Section>
      </div>
    </Layout>
  );
}
