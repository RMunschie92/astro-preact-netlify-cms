/**
 * Astro Preact Netilify CMS Sandbox - Static site.
 *
 * @module /components/generics/Button
 * @description Generic button component
 * 
 * @param {function} callback - Callback function to be passed to button's `onClick` attribute. Defaults to `() => {}`.
 * @param {boolean} disabled - Denotes whether or not button should be disabled. Not a checked prop.
 */


//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
import '../../styles/components/generics/Button.css';

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
const Button = (props) => {
  // Props checking
  const callback = props.callback && typeof props.callback === 'function' ?
    props.callback : 
    () => {};

  return (
    <button disabled={props.disabled} onClick={callback}>
      {props.children}
    </button>
  )
}

export default Button;