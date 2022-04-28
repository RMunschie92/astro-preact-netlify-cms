//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
// Libraries

// CSS
import '../../styles/components/containers/Contact.css';

// Components
import ContactForm from '../specifics/ContactForm.jsx';

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