import { useState } from 'react';

function App() {
  const [regalos, setRegalos] = useState(['Medias', 'Caramelos', 'Vitel Tone']);
  const [input, setInput] = useState('');

  const handleButtonClick = () => {
    setRegalos((prevState) => [...prevState, input]);
    setInput('');
  };

  return (
    <div className="App">
      <main>
        <div>
          <h1>Regalos:</h1>
          <div className="formulario">
            <input type="text" onChange={(e) => setInput(e.target.value)} value={input} />
            <button type="submit" onClick={handleButtonClick}>
              Agregar
            </button>
          </div>
          <ul>
            {regalos.map((regalo, index) => {
              return <li key={index}>{regalo}</li>;
            })}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
