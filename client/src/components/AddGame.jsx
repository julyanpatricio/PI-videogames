import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getGames } from "../actions";
import '../App.css'
import './AddGame.css'


function AddGame() {
  const { games, genres, platforms } = useSelector(state => state)
  const dispatch = useDispatch()
  const { push } = useHistory()

  const [values, setValues] = useState({
    name: "",
    description: "",
    released: "2021-08-07",
    rating: 5,
    genres: [],
    platforms: [],
    image: 'https://avatars.githubusercontent.com/u/57154655?s=200&v=4'
  });

  const [errors, setErrors] = useState({})

  function handleChange(e) {
    setValues(values => ({
      ...values,
      [e.target.name]: e.target.name !== 'genres' && e.target.name !== 'platforms' ? e.target.value :
        e.target.name === 'genres'
          ? !values.genres.includes(parseInt(e.target.value)  )
            ? [...values.genres, parseInt(e.target.value)] : values.genres.filter(genre => genre !== parseInt(e.target.value))
          : !values.platforms.includes(e.target.value)
            ? [...values.platforms, e.target.value] : values.platforms.filter(platform => platform !== e.target.value)
    }))
    setErrors(validate({
      ...values,
      [e.target.name]: e.target.value
    }));
  }
  function handleSubmit(e) {
    e.preventDefault()
    if(Object.keys(errors).length > 0) return alert('check required fields')
    axios.post('/videogame/', values)
      .then(response => {
        dispatch(getGames())
        !response.data.error ? push(`/game/${response.data.id}`) :
          alert(response.data.error)
        // push(`/Error500`) 
      })
  }


  function validate(values) {
    let errors = {};
    if (!values.name) {
      errors.name = 'Name is required';
    } else if (games.some(game => game.name === values.name)) {
      errors.name = 'Name already exists'
    }
    if (!values.platforms.length) {
      errors.platforms = 'select at least one platform';
    }
    if (!values.description) {
      errors.description = 'Description is required';
    }
    return errors;
  };



  return (
    
      <React.Fragment>
        <div className='title-addgame badge-title'>Add a Game</div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className=" control-label">
              Name
            </label>
            <div className="">
              <input autoComplete="off"onChange={handleChange} value={values.name} name="name" type="text" className={errors.name && 'has-error form-control'} required/>
              {errors.name && ( //si existe errors.name, se agregara un elemento p con el contenido del error
                <p className="has-error">{errors.name}</p>
              )}
            </div>
          </div>


          <div className="form-group">
            <label htmlFor="description" className=" control-label">
              Description
            </label>
            <div className="">
              <input autoComplete="off"onChange={handleChange} value={values.description} name="description" type="text" className={errors.description && 'has-error form-control'} required />
              {errors.description && (
                <p className="has-error">{errors.description}</p>
              )}
            </div>
          </div>


          <div className="form-group">
            <label htmlFor="released" className=" control-label">
              Release date
            </label>
            <div className="">
              <input className="form-control" type="date" id="released" name="released" onChange={handleChange}
                value={values.released}
                min="1980-01-01" max="2021-08-07"></input>
            </div>
          </div>


          <div className="form-group">
            <label htmlFor="rating" className=" control-label">
              Rating
            </label>
            <div className="rating">
              <input id="radio5" type="radio" name="rating" value="5" onChange={handleChange} />
              <label id='estrellas' htmlFor="radio5">★</label>
              <input id="radio4" type="radio" name="rating" value="4" onChange={handleChange} />
              <label id='estrellas' htmlFor="radio4">★</label>
              <input id="radio3" type="radio" name="rating" value="3" onChange={handleChange} />
              <label id='estrellas' htmlFor="radio3">★</label>
              <input id="radio2" type="radio" name="rating" value="2" onChange={handleChange} />
              <label id='estrellas' htmlFor="radio2">★</label>
              <input id="radio1" type="radio" name="rating" value="1" onChange={handleChange} />
              <label id='estrellas' htmlFor="radio1">★</label>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="image" className=" control-label">
              Image
            </label>
            <div className="">
              <input autoComplete="off"onChange={handleChange} name="image" type="text" className="form-control" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="platforms" className={errors.platforms && 'has-error control-label'}>
              Platforms
            </label>
            <div className="platforms">
              {platforms.map((platform, i) =>
                <label id='platforms' className={`checkbox-inline badge-pill badge-${values.platforms.includes(platform) ? 'warning' : 'dark-light'}`} htmlFor={platform} key={i}>
                  {platform}
                  <input id={platform} onChange={handleChange} type="checkbox" className='checkbox-inline' value={platform} name="platforms"
                  />
                </label>
              )}
            </div>
              {errors.platforms && (
                <p className="has-error">{errors.platforms}</p>
              )}
          </div>

          <div className="form-group">
            <label htmlFor="genres" className="control-label">
              Genres
            </label>
            <div className="genres">
              {genres.map(genre =>
                <label htmlFor={`genre-${genre.id}`} className={`checkbox-inline badge-pill badge-${values.genres.includes(genre.id) ? 'warning' : 'dark-light'}`} key={genre.id}>
                  {genre.name}
                  <input onChange={handleChange} id={`genre-${genre.id}`} type="checkbox" className='checkbox-inline' name="genres" value={genre.id} />
                </label>
              )}
            </div>
          </div>


          <div>
            <button
              type="submit"
              className="button-addgame"
              style={{ marginTop: "20px" }}
            >
              Add Game
            </button>
          </div>
        </form>
      </React.Fragment>
    
  );
}


export default AddGame;