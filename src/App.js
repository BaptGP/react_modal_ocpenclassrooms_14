import { useState } from "react";
import "./App.css";
import Modal from "./lib/components/Modal";

const array = [
  {
    value: "fromage",
    title: "Fromage",
  },
  {
    value: "chocolat",
    title: "Chocolat",
  },
];

function App() {
  const [active, setActive] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <Modal isActive={active} setActive={setActive}>
          <form style={{display:"flex", flexDirection:"column", height:"80vh", justifyContent:"space-between"}}>
            <label>
              Nom :
              <input type="text" name="name" />
            </label>
            <label>
              Nom :
              <input type="text" name="name" />
            </label>
            <label>
              Nom :
              <input type="text" name="name" />
            </label>
            <label>
              Nom :
              <input type="text" name="name" />
            </label>
            <label>
              Nom :
              <input type="text" name="name" />
            </label>

            <input type="submit" value="Envoyer" onClick={() => setActive(false)}/>
          </form>
        </Modal>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          className="App-link"
          onClick={() => setActive(true)}
        >
          Learn React
        </button>
      </header>
    </div>
  );
}

export default App;
