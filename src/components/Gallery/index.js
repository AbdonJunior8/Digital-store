import { useState } from 'react';
import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';
import './styles.css';

// Aceita 1440, "1440" ou "1440px"
const toCss = (value) => (/^\d+(\.\d+)?$/.test(String(value)) ? `${value}px` : value);

/**
 * Galeria de imagens (slide) com setas e miniaturas opcionais.
 * props: images [{ src }], className, width, height, radius, showThumbs
 */
export default function Gallery({ images = [], className = '', width, height, radius = '0px', showThumbs = false }) {
  const [current, setCurrent] = useState(0);
  const last = images.length - 1;

  const style = {
    '--gallery-width': width ? toCss(width) : '100%',
    '--gallery-height': height ? toCss(height) : 'auto',
    '--gallery-radius': radius,
  };

  return (
    <div className={`gallery ${className}`.trim()} style={style}>
      <div className="gallery__viewport">
        <div className="gallery__track" style={{ transform: `translateX(-${current * 100}%)` }}>
          {images.map((image, index) => (
            <div className="gallery__slide" key={`${image.src}-${index}`}>
              <img src={image.src} alt={`Imagem ${index + 1}`} />
            </div>
          ))}
        </div>

        <button
          type="button"
          className="gallery__arrow gallery__arrow--left"
          onClick={() => setCurrent((index) => index - 1)}
          disabled={current === 0}
          aria-label="Imagem anterior"
        >
          <img src={arrowLeft} alt="" />
        </button>

        <button
          type="button"
          className="gallery__arrow gallery__arrow--right"
          onClick={() => setCurrent((index) => index + 1)}
          disabled={current === last}
          aria-label="Próxima imagem"
        >
          <img src={arrowRight} alt="" />
        </button>
      </div>

      {showThumbs && (
        <div className="gallery__thumbs">
          {images.map((image, index) => (
            <button
              type="button"
              key={`${image.src}-thumb-${index}`}
              className={index === current ? 'gallery__thumb gallery__thumb--active' : 'gallery__thumb'}
              onClick={() => setCurrent(index)}
              aria-label={`Ver imagem ${index + 1}`}
            >
              <img src={image.src} alt="" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
