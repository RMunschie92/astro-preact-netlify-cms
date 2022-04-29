/**
 * Astro Preact Netilify CMS Sandbox - Static site.
 *
 * @module /components/specifics/ContactForm
 * @description An example of a contact form.
 */

//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
// Libraries
import { useState } from 'preact/hooks';

// CSS
import '../../styles/components/specifics/ContactForm.css';

// Components
import Button from '../generics/Button.jsx';

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
const ContactForm = () => {
  // State variables
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(true);

  //
  // Handler functions
  //

  /**
   * Handler function passed to `<input>` for user's first name `onInput` attribute. Updates state.firstName
   * @param {Event} event - Input event triggering callback.
   * @return {null} Sets state and executes callbacks.
   */
  const updateFirstName = (event) => {
    event.preventDefault();
    setFirstName(event.target.value);
    checkSubmitDisabled();
  }

  /**
   * Handler function passed to `<input>` for user's last name `onInput` attribute. Updates state.lastName
   * @param {Event} event - Input event triggering callback.
   * @return {null} Sets state and executes callbacks.
   */
  const updateLastName = (event) => {
    event.preventDefault();
    setLastName(event.target.value);
    checkSubmitDisabled();
  }

  /**
   * Handler function passed to `<input>` for user's email `onInput` attribute. Updates state.email
   * @param {Event} event - Input event triggering callback.
   * @return {null} Sets state and executes callbacks.
   */
  const updateEmail = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
    validateEmail(event.target.value);
  }

  /**
   * Validate email input
   * @param {String} value - The current value of the email `<input>`.
   * @return {null} Executes `setEmailIsInvalid` as callback
   */
  const validateEmail = async (value) => {
    // Regular expression to represent a valid email address
    // Test resource document located here - http://jsfiddle.net/ghvj4gy9/embedded/result,js/
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // Return result of the input following the regular expression
    let valid = re.test(String(value).toLowerCase());

    if (valid) {
      setEmailIsInvalid(false);
    }
    else if (valid === false) {
      setEmailIsInvalid(true);
    }

    checkSubmitDisabled();
  }

  /**
   * Helper function to determine if the submit button should be disabled or not.
   * @return {null} Executes `setSubmitDisabled()` callback.
   */
  const checkSubmitDisabled = () => {
    if (firstName && lastName && email && emailIsInvalid !== true) {
      setSubmitDisabled(false);
    }
    else {
      submitDisabled ? null : setSubmitDisabled(true);
    }
  }

  /**
   * Handler function passed to 
   * @return {null} Executes `setEmailIsInvalid` as callback
   */
  const handleFormSubmit = () => {
    alert('The form has been submitted!');
  }

  return (
    <form>
      <h2>A sample form</h2>
      <div>
        <label for="first-name">First Name</label>
        <input type="text" name="first-name" id="first-name" onInput={updateFirstName} /> 
      </div>
      
      <div>
        <label for="last-name">Last Name</label>
        <input type="text" name="last-name" id="last-name" onInput={updateLastName} />
      </div>

      <div>
        <label for="email">Email</label>
        <input type="email"
               name="email"
               id="email"
               value={email}
               onInput={updateEmail}
               className={emailIsInvalid ? 'invalid' : ''} /> 
      </div>

      <Button disabled={submitDisabled} callback={handleFormSubmit}>Submit</Button>
    </form>
  )
}

export default ContactForm;