import React, { useState } from "react";
import { fetchAstriod } from "../FetchSpaceInfo";
import DateSearch from "./DateSearch";

function Searchbar(props) {
  const [date, setDate] = useState("");
  const [astriod, setAstriod] = useState({});

  const searchAstriod = async (e) => {
    if (e.key === "Enter") {
      const astriodData = await fetchAstriod();

      setAstriod(astriodData);
      setDate("");
    }
  };

  return (
    <div>
      <input
        className="searchbar form-control"
        type="text"
        placeholder={props.placeholder}
        value={date}
        onChange={(e) => setDate(e.target.value)}
        onKeyPress={searchAstriod}
      />
      <DateSearch data={astriod} />
      
    </div>
  );
}

export default Searchbar;
