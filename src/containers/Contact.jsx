/**
 * Astro Preact Netilify CMS Sandbox - Static site.
 *
 * @module /containers/Contact
 * @description The "Contact" page container.
 */

//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
// Libraries

// CSS
import '../styles/containers/Contact.css';

// Components
import ContactForm from '../components/specifics/ContactForm.jsx';

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
const Contact = (props) => {

  // Don't render component if content not passed from Astro template
  if (!props.content) {
    return null;
  }

  const { content } = props;

  return (
    <main>
      <h2>{content.title}</h2>

      <ContactForm />
    </main>
  )
}

export default Contact;