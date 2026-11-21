import Layout from '../Layout';
import Gallery from '../../components/Gallery';
import Section from '../../components/Section';
import ProductListing from '../../components/ProductListing';
import products from '../../data/products';
import './styles.css';

const slides = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => ({ src: `/home-slide-${n}.jpeg` }));
const collections = [1, 2, 3].map((n) => ({ src: `/collection-${n}.png`, alt: `Coleção ${n}` }));
const hotProducts = products.slice(0, 8);

export default function HomePage() {
  return (
    <Layout>
      <Gallery className="home__gallery" images={slides} width="1440px" height="681px" />

      <div className="container">
        <Section title="Coleções em destaque" titleAlign="center">
          <div className="home__collections">
            {collections.map(({ src, alt }) => (
              <img key={src} src={src} alt={alt} />
            ))}
          </div>
        </Section>

        <Section title="Produtos em alta" titleAlign="left">
          <ProductListing products={hotProducts} columns={4} />
        </Section>
      </div>
    </Layout>
  );
}
