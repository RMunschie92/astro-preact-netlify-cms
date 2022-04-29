/**
 * Astro Preact Netilify CMS Sandbox - Static site.
 *
 * @module /components/commons/GlobalHeader
 * @description The site header
 */

//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
// CSS
import '../../styles/components/commons/GlobalHeader.css';

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
const GlobalHeader = () => {

  return (
    <header>
      <h1>Astro/Preact Sandbox</h1>

      <nav>
        <ul>
          <li>
            <a href="/">Homepage</a>
          </li>

          <li>
            <a href="/about">About</a>
          </li>

          <li>
            <a href="/test-entries-list">Test Entries</a>
          </li>

          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default GlobalHeader;