/**
 * Background component
 * Replaces tsparticles stars.
 * The animated mesh gradient is handled in index.css via
 * body::before and body::after pseudo-elements.
 * This just renders the subtle grid texture overlay.
 */
const Background = () => (
    <div className="gridTexture" aria-hidden="true" />
  );
  
  export default Background;