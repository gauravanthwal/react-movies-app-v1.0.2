import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import { connect } from "react-redux";
import { searchMovie } from "../../redux/actions/moviesAction";

const Nav = ({ searchMovie }) => {
  const [text, setText] = useState("marvel");

  useEffect(()=>{
      searchMovie(text)
  })
  
  return (
    <div className="bg-color">
      <nav className="navbar nav">
        <Link exact to="/">
          <div className="logo-text" style={{ color: "white" }}>
            Movies<span style={{ color: "black" }}>Verse</span>
          </div>
        </Link>
        <div className="">
          <input
            style={{ display: "inline" }}
            type="text"
            name="text"
            className="input-field"
            placeholder="Search your movies..."
            value={text}
            autoComplete="off"
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className="btn"
            style={{
              margin: "0",
              background: "#272626",
              padding: "0px 5px 8px 5px",
              color: "#fff",
            }}
          >
            <i className="material-icons">search</i>
          </button>
        </div>
        <ul className="">
          <li>
            <Link exact to="/">Home</Link>
          </li>
          <li>
            <Link exact to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default connect(null, { searchMovie })(Nav);
