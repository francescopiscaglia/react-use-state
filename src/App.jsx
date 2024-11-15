import './App.css'
import languages from "./db/languages.js";

function App() {


  return (
    <>

      <div className="container">

        <div className="tabs">
          <ul>

            {languages.map((item, index) => {
              return (
                <li key={item.id}>
                  <div className="title">
                    <span>{item.title}</span>
                  </div>
                  <div className="description">
                    <p>{item.description}</p>
                  </div>
                </li>
              );
            })}

          </ul>
        </div>
      </div>

    </>
  )
}

export default App
