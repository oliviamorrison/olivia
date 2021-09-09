
import "./Home.css"

function App() {

  const header = (
    <div className="header">
      <span className="primary">olivia morrison</span>
      <span className="secondary">otherwise known as William's sister</span>
    </div>
  )

  const nav = (
    <ul className="nav">
      <li><a>now</a></li>
      <li><a>playground</a></li>
    </ul>
  )

  return (
    <div className="body">
      {header}
      {nav}
    </div>
  );
}

export default App;
