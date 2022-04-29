//------------------------------------------------------------------------------
// Imports
//------------------------------------------------------------------------------
// Libraries

// CSS
import '../styles/containers/TestEntriesList.css';

// Components

//------------------------------------------------------------------------------
// Component
//------------------------------------------------------------------------------
const TestEntriesList = (props) => {

  return (
    <main>
      <h1>Test Entries</h1>

      <ul>
        {props.entries.map((post) => (
          <li>
            <h2>{post.frontmatter.title}</h2>
            <a href={post.url}>Read more</a>
          </li>
        ))}
      </ul>

    </main>
  )
}

export default TestEntriesList;