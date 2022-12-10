import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [regalos, setRegalos] = useState(() => {
    const savedRegalos = localStorage.getItem('regalos');
    return savedRegalos
      ? JSON.parse(savedRegalos)
      : [
          { id: 0, name: 'Medias', quantity: 1 },
          { id: 1, name: 'Caramelo', quantity: 1 },
          { id: 2, name: 'Vitel Tone', quantity: 1 },
        ];
  });

  const [inputRegalo, setInputRegalo] = useState('');
  const [inputNumero, setInputNumero] = useState(1);

  useEffect(() => {
    localStorage.setItem('regalos', JSON.stringify(regalos));
  }, [regalos]);

  const handleAddRegalos = (e) => {
    e.preventDefault();

    if (inputRegalo.trim() == '') {
      return;
    }

    const RegaloExists = regalos.find((regalo) => regalo.name == inputRegalo);
    if (!RegaloExists) {
      setRegalos((prevRegalos) => [
        ...prevRegalos,
        {
          id: prevRegalos.length > 0 ? prevRegalos.at(-1).id + 1 : 1,
          name: inputRegalo,
          quantity: parseInt(inputNumero),
        },
      ]);
    } else {
      setRegalos((prevRegalos) => {
        return prevRegalos.map((regalo) =>
          regalo.id == RegaloExists.id
            ? {
                id: regalo.id,
                name: regalo.name,
                quantity: regalo.quantity + parseInt(inputNumero),
              }
            : regalo
        );
      });
    }

    setInputRegalo('');
    setInputNumero(1);
  };

  const handleDeleteRegalo = (regalo) => {
    setRegalos((prevRegalos) => prevRegalos.filter((r) => r.id != regalo.id));
  };

  const handleDeleteAllRegalos = () => {
    setRegalos([]);
  };

  return (
    <div className="App flex justify-center items-center h-screen text-center">
      <div className="bg-black text-white p-6 bg-opacity-75 rounded-xl">
        <h1 className="text-3xl underline mb-6 font-bold">Regalos:</h1>
        <form>
          <input
            type="text"
            className="placeholder:text-sm p-1.5 rounded text-black"
            placeholder="Agrega un regalo..."
            value={inputRegalo}
            onChange={(e) => setInputRegalo(e.target.value)}
          />
          <input
            type="number"
            className="text-black ml-2 w-12 p-1.5 rounded"
            min={1}
            value={inputNumero}
            onChange={(e) => setInputNumero(e.target.value)}
          />
          <button
            type="submit"
            className="ml-2 bg-red-600 p-2 rounded hover:bg-red-800 active:bg-red-500"
            onClick={(e) => handleAddRegalos(e)}
          >
            Agregar
          </button>
        </form>
        {regalos.length > 0 ? (
          <div className="mt-4 flex flex-col gap-5">
            {regalos.map((regalo) => {
              return (
                <div className="flex justify-between items-center" key={regalo.id}>
                  <div className="flex gap-2 items-center">
                    <p className="bg-red-600 p-1.5 rounded">{regalo.quantity}</p>
                    {regalo.name}
                  </div>
                  <button
                    className="bg-red-600 p-1.5 rounded-lg px-3 hover:bg-red-800 active:bg-red-500"
                    onClick={() => handleDeleteRegalo(regalo)}
                  >
                    X
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="my-4">No hay regalos, prueba agregar uno !</p>
        )}
        <button
          className="bg-red-600 p-2 rounded mt-4 hover:bg-red-800 active:bg-red-500"
          onClick={handleDeleteAllRegalos}
        >
          Borrar todo
        </button>
      </div>
    </div>
  );
}

export default App;
