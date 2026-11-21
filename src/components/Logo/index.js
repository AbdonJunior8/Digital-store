import logoHeader from '../../assets/logo-header.svg';
import logoFooter from '../../assets/logo-footer.svg';

/**
 * Logomarca da loja (253x44).
 * variant: "header" (colorida) ou "footer" (branca).
 */
export default function Logo({ variant = 'header' }) {
  const src = variant === 'footer' ? logoFooter : logoHeader;

  return <img src={src} alt="Digital Store" width={253} height={44} />;
}
