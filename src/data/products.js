// "Banco de dados" local dos produtos da loja.
const description =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

const make = (id, name, brand, category, gender, state, price, priceDiscount) => ({
  id,
  name,
  brand,
  category,
  gender,
  state,
  price,
  priceDiscount,
  image: `/product-thumb-${((id - 1) % 5) + 1}.jpeg`,
  images: [1, 2, 3, 4, 5].map((n) => ({ src: `/produc-image-${n}.jpeg` })),
  reference: `Casual | Nike | REF:${38416000 + id}`,
  stars: 4.6,
  rating: 90 + id,description,
}
);

const products = [
  make(1, 'K-Swiss V8 - Masculino', 'k-swiss', 'casual', 'masculino', 'novo', 200, 100),
  make(2, 'Nike Air Revolution', 'nike', 'corrida', 'masculino', 'novo', 349.9),
  make(3, 'Adidas Runfalcon 3.0', 'adidas', 'corrida', 'feminino', 'novo', 289.9, 219.9),
  make(4, 'Puma Smash Classic', 'puma', 'casual', 'unisex', 'usado', 249.9),
  make(5, 'Balenciaga Triple S', 'balenciaga', 'esporte-lazer', 'unisex', 'novo', 1899, 1599),
  make(6, 'K-Swiss Court Pro', 'k-swiss', 'esporte-lazer', 'feminino', 'novo', 259.9),
  make(7, 'Nike Court Vision', 'nike', 'casual', 'feminino', 'usado', 399.9, 329.9),
  make(8, 'Adidas Grand Court', 'adidas', 'casual', 'masculino', 'novo', 279.9),
  make(9, 'Puma Anzarun Lite', 'puma', 'corrida', 'masculino', 'novo', 219.9, 179.9),
  make(10, 'Nike Air Max 90', 'nike', 'esporte-lazer', 'masculino', 'novo', 799.9),
  make(11, 'Adidas Ultraboost', 'adidas', 'corrida', 'unisex', 'novo', 999.9, 849.9),
  make(12, 'K-Swiss Classic 88', 'k-swiss', 'utilitario', 'masculino', 'usado', 189.9),
  make(13, 'Puma Suede Classic', 'puma', 'casual', 'feminino', 'novo', 329.9),
  make(14, 'Nike Revolution 6 Next Nature', 'nike', 'corrida', 'masculino', 'novo', 219, 199),
  make(15, 'Balenciaga Track', 'balenciaga', 'utilitario', 'unisex', 'usado', 1499),
];

/** Preço que o cliente paga (se tiver desconto). */
export const getFinalPrice = (product) => product.priceDiscount ?? product.price;

export default 
products;
