import { useState } from 'react';
import './App.css';
import languages from "./db/languages.js";

function App() {

  // logic
  const [active, setActive] = useState(0)

  function handleClick(e) {

    // leggo il valore di data-inded
    const newActive = e.target.getAttribute("data-index");

    // imposto il valore di data-index a active
    setActive(newActive)
  };


  // render
  return (
    <div className="container">

      <h1>Learn Web Development</h1>

      <div className="tabs">

        {/* map per avere i bottoni in pagina */}
        {languages.map((item, index) => (
          <button onClick={handleClick} key={item.id} data-index={index}>
            {item.title}
          </button>
        ))}
      </div>


      {/* map per avere le description in pagina */}
      {languages.map((item, index) => (

        // se active corrisponde ad index imposto la classe active se no hide
        <div className={active == index ? "tab-content active" : "tab-content hide"} key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      )
      )}
    </div>
  );
};

export default App;
