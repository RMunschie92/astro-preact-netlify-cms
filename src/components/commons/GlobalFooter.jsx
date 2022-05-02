/**
 * Astro Preact Netilify CMS Sandbox - Static site.
 *
 * @module /components/commons/GlobalFooter
 * @description The site footer
 */

//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
// CSS
import '../../styles/components/commons/GlobalFooter.css';

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
const GlobalFooter = () => {

  const year = new Date().getFullYear();

  return (
    <footer>
      <a href="https://facebook.com">
        <img src="/assets/facebook.svg" />
        <p class="visually-hidden">Facebook</p>
      </a>

      <p>Testerson Industries Copyright {year}</p>
    </footer>
  )
}

export default GlobalFooter;