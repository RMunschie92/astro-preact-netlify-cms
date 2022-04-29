//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
// Libraries

// CSS
import '../../styles/components/containers/TestEntry.css';

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

      <article>
        {props.children}
      </article>

    </main>
  )
}

export default TestEntry;