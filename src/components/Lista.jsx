import { useEffect, useState } from "react";

export const Lista = () => {
  const [cargando, setCargando] = useState(true);
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPersonajes(data.results);
        setCargando(false);
      });
  }, []);

  return (
    <div className="contenedor">
      {cargando && (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}

      {personajes.map(function (personaje) {
        return <div className="card">
             <img src="..." className="card-img-top" alt="..." />
            <div className="card-body custom-card">
            <h5 className="card-title" key={personaje.id}>{personaje.name}</h5>

            </div>
            </div>;
      })}
    </div>
  );
};
