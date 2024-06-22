import logo from './logo.svg';
import './App.css';
import Greet from './Greet';
import Inline from './Inline';

function App() {
  return (
    <div className="App">
     <Greet name="raj"></Greet>
     <Inline></Inline>
     <button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>
<button type="button" class="btn btn-warning">Warning</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Light</button>
<button type="button" class="btn btn-dark">Dark</button>

<button type="button" class="btn btn-link">Link</button>
    </div>
  );
}

export default App;
