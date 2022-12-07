import { useState } from 'react';
function App() {
  const [regalos, setRegalos] = useState(['Medias', 'Caramelos', 'Vitel Tone']);
  const [input, setInput] = useState('');

  const handleAddRegalos = () => {
    setRegalos((prevRegalos) => [...prevRegalos, input]);
    setInput('');
  };

  const handleDeleteRegalos = (regaloAEliminar) => {
    setRegalos((prevRegalos) => prevRegalos.filter((regalo) => regalo !== regaloAEliminar));
  };

  const handleClearRegalos = () => {
    setRegalos([]);
  };

  return (
    <div className="App flex justify-center items-center min-h-screen">
      <div className="bg-black text-white p-8 pt-4 rounded-lg text-center bg-opacity-60">
        <h1 className="text-red-600 font-bold mb-6 text-3xl underline">Regalos:</h1>
        <div>
          <input
            type="text"
            placeholder="Escribe tu regalo aquí"
            className="p-2 rounded-tl-sm text-black focus:outline-red-600 outline-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="bg-red-600 p-2 rounded ml-2 hover:bg-red-700 active:bg-red-500"
            onClick={handleAddRegalos}
          >
            Agregar
          </button>
        </div>
        {regalos.length > 0 ? (
          <div className="flex flex-col gap-2 mt-4">
            {regalos.map((regalo, index) => {
              return (
                <div className="flex justify-between items-center" key={index}>
                  <p>{regalo}</p>
                  <button
                    className="bg-red-600 p-2 text-sm rounded-sm font-semibold hover:bg-red-700 active:bg-red-500"
                    onClick={() => handleDeleteRegalos(regalo)}
                  >
                    X
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="my-5 text-sm text-[#9f9f9f]">No hay regalos, prueba añadiendo uno!</p>
        )}

        <button
          className="text-center mx-auto bg-red-600 p-2 rounded hover:bg-red-700 active:bg-red-500"
          onClick={handleClearRegalos}
        >
          Borrar Todo
        </button>
      </div>
    </div>
  );
}

export default App;
