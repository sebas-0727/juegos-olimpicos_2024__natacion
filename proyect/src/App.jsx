import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [showAll, setShowAll] = useState(false);
  const [showNewsModal, setShowNewsModal] = useState(false);
  const [showEventsModal, setShowEventsModal] = useState(false);
  const [showControversiesModal, setShowControversiesModal] = useState(false);

  const data = [
    { rank: 1, country: 'China', gold: 22, silver: 21, bronze: 11, total: 54 },
    { rank: 2, country: 'Gran Bretaña', gold: 18, silver: 8, bronze: 6, total: 32 },
    { rank: 3, country: 'Italia', gold: 16, silver: 6, bronze: 15, total: 37 },
    { rank: 4, country: 'Estados Unidos', gold: 10, silver: 17, bronze: 3, total: 30 },
    { rank: 5, country: 'Ucrania', gold: 8, silver: 15, bronze: 17, total: 40 },
    { rank: 6, country: 'Brasil', gold: 7, silver: 9, bronze: 10, total: 26 },
    { rank: 7, country: 'Australia', gold: 6, silver: 8, bronze: 13, total: 27 },
    { rank: 8, country: 'Canadá', gold: 5, silver: 4, bronze: 4, total: 13 },
    { rank: 9, country: 'Países Bajos', gold: 5, silver: 3, bronze: 2, total: 10 },
    { rank: 10, country: 'Alemania', gold: 4, silver: 3, bronze: 3, total: 10 },
    { rank: 11, country: 'Japón', gold: 3, silver: 3, bronze: 6, total: 12 },
    { rank: 12, country: 'Hungría', gold: 3, silver: 3, bronze: 1, total: 7 },
    { rank: 13, country: 'Francia', gold: 2, silver: 6, bronze: 6, total: 14 },
    { rank: 14, country: 'España', gold: 2, silver: 4, bronze: 9, total: 15 },
    { rank: 15, country: 'Israel', gold: 2, silver: 1, bronze: 2, total: 5 },
    { rank: 16, country: 'Turquía', gold: 2, silver: 0, bronze: 1, total: 3 },
    { rank: 17, country: 'Polonia', gold: 2, silver: 0, bronze: 0, total: 2 },
    { rank: 17, country: 'Singapur', gold: 2, silver: 0, bronze: 0, total: 2 },
    { rank: 19, country: 'México', gold: 1, silver: 3, bronze: 3, total: 7 },
    { rank: 20, country: 'República Checa', gold: 1, silver: 1, bronze: 2, total: 4 },
    { rank: 21, country: 'Grecia', gold: 1, silver: 1, bronze: 0, total: 2 },
    { rank: 21, country: 'Suiza', gold: 1, silver: 1, bronze: 0, total: 2 },
    { rank: 23, country: 'Argentina', gold: 1, silver: 0, bronze: 1, total: 2 },
    { rank: 24, country: 'Dinamarca', gold: 1, silver: 0, bronze: 0, total: 1 },
    { rank: 25, country: 'Colombia', gold: 0, silver: 5, bronze: 1, total: 6 }
  ];

  const visibleData = showAll ? data : data.slice(0, 4);

  const handleNewsClick = (event) => {
    event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
    setShowNewsModal(true);
  };

  const handleEventsClick = (event) => {
    event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
    setShowEventsModal(true);
  };

  const handleControversiesClick = (event) => {
    event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
    setShowControversiesModal(true);
  };

  const closeModal = () => {
    setShowNewsModal(false);
    setShowEventsModal(false);
    setShowControversiesModal(false);
  };

  return (
    <div className="container">
      {/* Barra de navegación */}
      <nav className="navbar">
        <div className="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Olympic_flag.svg/300px-Olympic_flag.svg.png"
            alt="Logo"
          />
        </div>
        <ul className="nav-links">
          <li><a href="#news" onClick={handleNewsClick}>Noticias</a></li>
          <li><a href="#events" onClick={handleEventsClick}>Eventos</a></li>
          <li><a href="#controversies" onClick={handleControversiesClick}>Controversias</a></li>
        </ul>
      </nav>

      {/* Contenedor principal */}
      <div className="main-content">
        {/* Tabla de estadísticas */}
        <div className="statistics-container">
          <table className="statistics">
            <thead>
              <tr>
                <th>Ranking</th>
                <th>País</th>
                <th>Oro</th>
                <th>Plata</th>
                <th>Bronce</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {visibleData.map((item, index) => (
                <tr key={index}>
                  <td>{item.rank}</td>
                  <td>{item.country}</td>
                  <td>{item.gold}</td>
                  <td>{item.silver}</td>
                  <td>{item.bronze}</td>
                  <td>{item.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="button-container">
            {!showAll && (
              <button className="show-more" onClick={() => setShowAll(true)}>Mostrar Más</button>
            )}
            {showAll && (
              <button className="show-less" onClick={() => setShowAll(false)}>Mostrar Menos</button>
            )}
          </div>
        </div>
      </div>

      {/* Modal de Noticias */}
      {showNewsModal && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Noticias</h2>
            <p>La natación en los Juegos Olímpicos de París 2024 se realizó en el Paris La Défense Arena en Nanterre del 27 de julio al 4 de agosto de 2024. Las pruebas de natación en aguas abiertas fueron disputadas los días 8 y 9 de agosto en las aguas del río Sena, con punto de partida en el puente Alejandro III.</p>
            <p>En total fueron disputadas en este deporte 37 pruebas diferentes, 18 masculinas, 18 femeninas y una mixta. El programa de competiciones se mantuvo como en la edición anterior.</p>
          </div>
        </div>
      )}

      {/* Modal de Eventos */}
      {showEventsModal && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Eventos</h2>
            <p>Participaron en total 896 nadadores (448 hombres y 448 mujeres) de diferentes comités olímpicos nacionales pertenecientes a World Aquatics: 852 en piscina y 44 en aguas abiertas.</p>
          </div>
        </div>
      )}

      {/* Modal de Controversias */}
      {showControversiesModal && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Controversia sobre la piscina olímpica</h2>
            <p>Durante los Juegos Olímpicos hubo quejas sobre la profundidad de la piscina olímpica, que dificultaba la obtención de buenas marcas. Esto se habría debido a la escasa profundidad de dicha piscina, 2,20 m, cuando la recomendación de World Aquatics es de un mínimo de 2,50 m y en las cuatro ediciones anteriores de los Juegos Olímpicos, de 3 m. Una menor profundidad hace que la fase de nado subacuático sea menos eficiente, especialmente en el caso de los hombres.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
