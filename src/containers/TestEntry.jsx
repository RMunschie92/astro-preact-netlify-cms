/**
 * Astro Preact Netilify CMS Sandbox - Static site.
 *
 * @module /containers/TestEntry
 * @description The "TestEntry" page container.
 */

//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
// Libraries

// CSS
import '../styles/containers/TestEntry.css';

// Components

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
const TestEntry = (props) => {

  // Don't render component if content not passed from Astro template
  if (!props.content) {
    return null;
  }

  const { content } = props;

  return (
    <main>
      <h2>{content.title}</h2>

      <img src={content.banner_image} alt={content.banner_image_alt_description} />

      <article>
        {props.children}
      </article>

    </main>
  )
}

export default TestEntry;