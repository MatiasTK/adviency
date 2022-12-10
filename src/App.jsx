import { useState } from 'react';
function App() {
  const [regalos, setRegalos] = useState(['Medias', 'Caramelos', 'Vitel Tone']);
  const [input, setInput] = useState('');

  const handleButtonAdd = () => {
    if (input.trim() == '' || regalos.includes(input)) {
      setInput('');
      return;
    }

    setRegalos((prevRegalos) => [...prevRegalos, input]);
    setInput('');
  };

  const handleButtonRemove = (regalo) => {
    setRegalos((prevRegalos) => prevRegalos.filter((r) => r !== regalo));
  };

  const handleDeleteRegalos = () => {
    setRegalos([]);
  };

  return (
    <div className="App flex justify-center items-center h-screen">
      <div className="bg-red-500 p-8 rounded text-white border-2 border-white text-center shadow-lg">
        <h1 className="text-3xl mb-8 bold underline">Regalos:</h1>
        <div>
          <input
            type="text"
            className="rounded p-1.5 placeholder:text-sm focus:outline-[#68a897] text-black"
            placeholder="Pon aquí tu nuevo regalo.."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="bg-[#68a897] p-2 rounded ml-2 hover:bg-[#538678] active:bg-[#86b9ab]"
            onClick={handleButtonAdd}
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
                    className="bg-[#68a897] px-2 py-1 rounded-lg hover:bg-[#538678] active:bg-[#86b9ab]"
                    onClick={() => handleButtonRemove(regalo)}
                  >
                    X
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="my-5">No hay regalos, prueba agregar uno!</p>
        )}
        <button
          className="bg-[#68a897] p-2 rounded mt-3 hover:bg-[#538678] active:bg-[#86b9ab]"
          onClick={handleDeleteRegalos}
        >
          Borrar todo
        </button>
      </div>
    </div>
  );
}

export default App;
