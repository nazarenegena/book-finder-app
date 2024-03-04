import "../src/styles/App.css";
import Books from "./components/Books";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Search />
      <Books />
    </div>
  );
}

export default App;
