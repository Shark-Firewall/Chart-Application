import "./App.css";
import Header from "./componets/Header";
import Body from "./componets/Body";
import Base from "./componets/Base";

function App() {
  return (
    <div className="body">
      <div className="App">
        <Header />
        <Body />
        <Base />
      </div>
    </div>
  );
}

export default App;
