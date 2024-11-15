
import './App.css';
import languages from "./db/languages.js";

function App() {

  // logic



  // render
  return (
    <div className="container">

      <h1>Learn Web Development</h1>

      <div className="tabs">

        {/* map per avere i bottoni in pagina */}
        {languages.map((item, index) => (
          <button key={item.id}>
            {item.title}
          </button>
        ))}
      </div>


      {/* map per avere le description in pagina */}
      {languages.map((item, index) => (

        // se active corrisponde ad index imposto la classe active se no hide
        <div className='tab-content' key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      )
      )}
    </div>
  );
}

export default App;
