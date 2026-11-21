// Grupos de filtro exibidos na página de listagem de produtos.
const filters = [
  {
    key: 'brand',
    title: 'Marca',
    inputType: 'checkbox',
    options: [
      { text: 'Adidas', value: 'adidas' },
      { text: 'Balenciaga', value: 'balenciaga' },
      { text: 'K-Swiss', value: 'k-swiss' },
      { text: 'Nike', value: 'nike' },
      { text: 'Puma', value: 'puma' },
    ],
  },
  {
    key: 'category',
    title: 'Categoria',
    inputType: 'checkbox',
    options: [
      { text: 'Esporte e lazer', value: 'esporte-lazer' },
      { text: 'Casual', value: 'casual' },
      { text: 'Utilitário', value: 'utilitario' },
      { text: 'Corrida', value: 'corrida' },
    ],
  },
  {
    key: 'gender',
    title: 'Gênero',
    inputType: 'checkbox',
    options: [
      { text: 'Masculino', value: 'masculino' },
      { text: 'Feminino', value: 'feminino' },
      { text: 'Unisex', value: 'unisex' },
    ],
  },

  {
    key: 'state',
    title: 'Estado',
    inputType: 'radio',
    options: [
      { text: 'Novo', value: 'novo' },
      { text: 'Usado', value: 'usado' },
    ],
  },
  
];

export default filters;
