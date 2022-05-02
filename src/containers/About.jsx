/**
 * Astro Preact Netilify CMS Sandbox - Static site.
 *
 * @module /containers/About
 * @description The "About" page container.
 */

//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
// Libraries

// CSS
import '../styles/containers/About.css';

// Components
import Counter from '../components/specifics/Counter.jsx';

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
const About = (props) => {

  // Don't render component if content not passed from Astro template
  if (!props.content) {
    return null;
  }

  const { content } = props;

  return (
    <main>
      <h2>{content.title}</h2>

      <p>{content.banner_heading}</p>

      <img src={content.left_banner_image} alt={content.left_banner_image_alt_description} />
      <img src={content.right_banner_image} alt={content.right_banner_image_alt_description} />

      <article>
        {props.children}
      </article>

      <Counter />
    </main>
  )
}

export default About;