import React from "react";
import './style.css'

export default function SearchMovies(){
  return(
    <form className="form">
      <label htmlFor="query" className="label">Movie name</label>
      <input className="input" type='text' name="query" placeholder="I.e. The Ugly Truth"></input>
      <button className="button" type="submit">Search</button>
    </form>
  )
}