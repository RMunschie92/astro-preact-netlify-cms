/**
 * Astro Preact Netilify CMS Sandbox - Static site.
 *
 * @module /containers/Index
 * @description The "Index"/homepage page container.
 */

//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
// Libraries

// CSS
import '../styles/containers/Index.css';

// Components
import Counter from '../components/specifics/Counter.jsx';

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
const Index = (props) => {

  // Don't render component if content not passed from Astro template
  if (!props.content) {
    return null;
  }

  const { content } = props;

  return (
    <main>
      <h2>{content.title}</h2>

      <p>{content.banner_heading}</p>

      <img src={content.banner_image} alt={content.banner_image_alt_description} />

      <article>
        {[props.children]}
      </article>

      <Counter />
    </main>
  )
}

export default Index;