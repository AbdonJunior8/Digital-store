import { useState } from 'react';
import './styles.css';

/*
 * Opções do produto (tamanhos, cores...).
 * props:
 *  - options: ["39", "40"]
 *  - shape: "square" | "circle
 *  - radius:border-radius(só vale para shape="square")
 *  - type: "text" | "color"
 *  - onSelect (opcional): chamado com a opção escolhida*/

export default function ProductOptions({ options = [], shape = 'square', radius = '0px', type = 'text', onSelect }) {
  const [selected, setSelected] = useState(null);

  const handleSelect = (option) => {
    setSelected(option);
    if (onSelect) onSelect(option);
  };

  return (
    <div className="product-options">
      {options.map((option) => {
        const classes = [
          'product-options__item',
          `product-options__item--${shape}`,
          selected === option ? 'product-options__item--selected' : '',
        ].join(' ');

        const style = {
          borderRadius: shape === 'circle' ? '50%' : radius,
          ...(type === 'color' ? { backgroundColor: option } : {}),
        };

        return (
          <button
            type="button"
            key={option}
            className={classes}
            style={style}
            onClick={() => handleSelect(option)}
            aria-pressed={selected === option}
            aria-label={type === 'color' ? `Cor ${option}` : `Opção ${option}`}
          >
            {type === 'text' ? option : null}
          </button>
        );
      })}
    </div>
  );
}
