import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '../Layout';
import Section from '../../components/Section';
import ProductListing from '../../components/ProductListing';
import FilterGroup from '../../components/FilterGroup';
import products, { getFinalPrice } from '../../data/products';
import filters from '../../data/filters';
import './styles.css';

const emptySelection = { brand: [], category: [], gender: [], state: [] };

// Remove acentos e deixa em minúsculas para a busca ignorar maiúsculas/acentos
const normalize = (text) =>
  text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

export default function ProductListingPage() {
  const [searchParams] = useSearchParams();
  const searchTerm = (searchParams.get('filter') ?? '').trim();

  const [sortOrder, setSortOrder] = useState('menor');
  const [selected, setSelected] = useState(emptySelection);

  // Marca/desmarca uma opção (radio só aceita um valor por grupo)
  const handleFilterChange = (group, value) => {
    setSelected((current) => {
      const values = current[group.key];

      if (group.inputType === 'radio') return { ...current, [group.key]: [value] };

      return {
        ...current,
        [group.key]: values.includes(value) ? values.filter((v) => v !== value) : [...values, value],
      };
    });
  };

  const visibleProducts = useMemo(() => {
    const term = normalize(searchTerm);

    const result = products.filter((product) => {
      const matchesSearch =
        term === '' || normalize(`${product.name} ${product.brand} ${product.category}`).includes(term);

      // dentro de um grupo vale "ou"; entre grupos vale "e"
      const matchesFilters = filters.every(
        ({ key }) => selected[key].length === 0 || selected[key].includes(product[key])
      );

      return matchesSearch && matchesFilters;
    });

    return result.sort((a, b) =>
      sortOrder === 'menor' ? getFinalPrice(a) - getFinalPrice(b) : getFinalPrice(b) - getFinalPrice(a)
    );
  }, [searchTerm, selected, sortOrder]);

  const total = visibleProducts.length;
  const totalText = `${total} ${total === 1 ? 'produto' : 'produtos'}`;
  const title = searchTerm ? `Resultados para "${searchTerm}" - ${totalText}` : `${totalText} encontrados`;

  return (
    <Layout>
      <div className="container listing-page">
        <aside className="listing-page__sidebar">
          <div className="listing-page__sort">
            <label htmlFor="sort">Ordenar por</label>
            <select id="sort" value={sortOrder} onChange={(event) => setSortOrder(event.target.value)}>
              <option value="menor">Menor preço</option>
              <option value="maior">Maior preço</option>
            </select>
          </div>

          <div className="listing-page__filters">
            <h3>Filtrar por</h3>
            <hr />

            {filters.map((group) => (
              <FilterGroup
                key={group.key}
                name={group.key}
                title={group.title}
                inputType={group.inputType}
                options={group.options}
                selected={selected[group.key]}
                onChange={(value) => handleFilterChange(group, value)}
              />
            ))}

            <button type="button" className="listing-page__clear" onClick={() => setSelected(emptySelection)}>
              Limpar filtros
            </button>
          </div>
        </aside>

        <div className="listing-page__results">
          <Section title={title} titleAlign="left">
            <ProductListing products={visibleProducts} columns={3} />
          </Section>
        </div>
      </div>
    </Layout>
  );
}
