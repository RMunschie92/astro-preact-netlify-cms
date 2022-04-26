//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
// CSS
import '../../styles/components/commons/GlobalFooter.css';

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
const GlobalFooter = () => {

  const year = new Date().getFullYear();

  return (
    <footer>
      <p>Testerson Industries Copyright {year}</p>
    </footer>
  )
}

export default GlobalFooter;