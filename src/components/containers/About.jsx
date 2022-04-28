//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
// Libraries

// CSS
import '../../styles/components/containers/About.css';

// Components
import Counter from '../specifics/Counter.jsx';

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

      <img src={content.left_banner_image} />
      <img src={content.right_banner_image} />

      <article>
        {props.children}
      </article>

      <Counter />
    </main>
  )
}

export default About;