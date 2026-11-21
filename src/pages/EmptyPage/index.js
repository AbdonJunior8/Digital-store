import { Link } from 'react-router-dom';
import Layout from '../Layout';
import './styles.css';

/** Página provisória para rotas que ainda não foram criadas. */
export default function EmptyPage() {
  return (
    <Layout>
      <div className="container empty-page">
        <h1>Página em construção</h1>
        <p>Esta página ainda não foi criada.</p>
        <Link to="/">Voltar para a Home</Link>
      </div>
    </Layout>
  );
}
