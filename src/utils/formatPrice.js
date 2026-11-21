const formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

/** Converte um número em moeda brasileira. Ex.: 149.9 -> "R$ 149,90" */
export function formatPrice(value) {
  return formatter.format(value);
}
