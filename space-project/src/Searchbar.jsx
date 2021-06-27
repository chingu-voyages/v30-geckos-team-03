import React from "react";
import { FiSearch } from "react-icons/fi";

const Searchbar = (props) => {
  return (
    <>
      <div>
        <div className="row">
          <div className="col-sm">
            <p>{props.topic}</p>
          </div>
        </div>
        <div className="row">
          <input
            className={props.className}
            type={props.type}
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.onChange}
            onKeyPress={props.KeyPress}
          />
          <button id="search-button" onClick={props.onClick}>
            <FiSearch />
          </button>
        </div>
      </div>
    </>
  );
};

export default Searchbar;
