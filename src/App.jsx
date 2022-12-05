import { useState } from 'react';
function App() {
  const [regalos, setRegalos] = useState(['Medias', 'Caramelos', 'Vitel Tone']);
  const [input, setInput] = useState('');

  const handleButtonAdd = () => {
    setRegalos((prevRegalos) => [...prevRegalos, input]);
    setInput('');
  };

  const handleButtonRemove = (regaloAEliminar) => {
    setRegalos((prevRegalos) => prevRegalos.filter((r) => r != regaloAEliminar));
  };

  return (
    <div className="App">
      <div className="content">
        <h1>Regalos:</h1>
        <div className="regalos-form">
          <input type="text" onChange={(e) => setInput(e.target.value)} value={input} />
          <button type="submit" onClick={handleButtonAdd}>
            Agregar
          </button>
        </div>
        <div className="regalos">
          {regalos.map((regalo, index) => {
            return (
              <div className="regalo" key={index}>
                <p>{regalo}</p>
                <button onClick={() => handleButtonRemove(regalo)}>X</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
