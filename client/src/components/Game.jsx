import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearPage, getGameDetail } from "../actions";
import './Game.css'
import parse from 'html-react-parser'


function Game() {
  const game = useSelector((state) => state.game);
  const dispatch = useDispatch();
  const { id } = useParams();

  // cuando se monta la pagina hace el fetch
  useEffect(() => {
    dispatch(getGameDetail(id));
    return () => dispatch(clearPage()) //cuando se desmonta, limpia el componente
  }, [id, dispatch]);

  /**
   * Ruta de detalle de videojuego: debe contener

[ ] Los campos mostrados en la ruta principal para cada videojuegos
[ ] imagen, 
[ ] nombre
[ ] géneros
[ ] Descripción
[ ] Fecha de lanzamiento
[ ] Rating
[ ] Plataformas
   */

  return (
    <React.Fragment>
      {game ? (
        <div className='game-detail' style={{
          backgroundImage: `url(${game.image_aditional || game.image})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}>
          <h1 className='position-absolute badge-title' >{game.name}</h1>
          <div className='description-container'>
            <div className='description-container-up'>
              <img className='img-detail' src={game.image} alt={game.name} />
              <div className='game-information'>

              <div className='released items-game-information'>
              FECHA

              </div>

              <div className='Rating items-game-information'>
              RATING

              </div>

                <div className='container-genres items-game-information'>
                  {game.genres.map((genre, i) => (
                    <span className='badge-pill badge-dark-light' key={genre.id}>{genre.name}</span>
                  ))}
                </div>
                <div className='container-platforms items-game-information'>
                  {game.platforms.map((p, i) =>
                    <span className='badge-pill badge-dark-light' key={p.platform.id}>
                      {p.platform.name}
                    </span>
                  )}
                </div>
                
              </div>
            </div>

            <div className='description-container-down'>
              <div className='description'>
                {parse(game.description)}
              </div>

            </div>
          </div>

        </div>

      ) : game === undefined ? (
        <div>Cargando...</div>
      ) : (
        <h1>Juego inexistente</h1>
      )}
    </React.Fragment>
  )
}

export default Game;