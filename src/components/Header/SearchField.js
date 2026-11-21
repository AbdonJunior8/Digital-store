import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/** Campo de busca: ao clicar na lupa ou apertar Enter vai para /products?filter=... */
export default function SearchField() {
  const [term, setTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = term.trim();
    navigate(value ? `/products?filter=${encodeURIComponent(value)}` : '/products');
  };

  return (
    <form className="search" onSubmit={handleSubmit} role="search">
      <input
        type="search"
        className="search__input"
        placeholder="Pesquisar produto..."
        value={term}
        onChange={(event) => setTerm(event.target.value)}
        aria-label="Pesquisar produto"
      />
      <button type="submit" className="search__button" aria-label="Buscar">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8F8F8F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="11" cy="11" r="7" />
          <line x1="16.5" y1="16.5" x2="21" y2="21" />
        </svg>
      </button>
    </form>
  );
}
