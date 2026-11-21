import './styles.css';

/**
 * Grupo de filtros (checkbox ou radio).
 * props:
 *  - title, inputType ("checkbox" | "radio"), options [{ text, value? }]
 *  - name (opcional): nome do grupo
 *  - selected (opcional): valores marcados (modo controlado)
 *  - onChange (opcional): chamado com o valor da opção clicada
 */
export default function FilterGroup({ title, inputType = 'checkbox', options = [], name, selected = [], onChange }) {
  const groupName = name ?? title;

  return (
    <fieldset className="filter-group">
      <legend className="filter-group__title">{title}</legend>

      {options.map(({ text, value }) => {
        const optionValue = value ?? text;

        return (
          <label key={optionValue} className="filter-group__option">
            <input
              type={inputType}
              name={groupName}
              value={optionValue}
              checked={selected.includes(optionValue)}
              onChange={() => onChange && onChange(optionValue)}
            />
            <span>{text}</span>
          </label>
        );
      })}
    </fieldset>
  );
}
