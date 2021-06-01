import axios from "axios";

const nasa_key = process.env.REACT_APP_NASA_API_KEY;
const URL = `https://api.nasa.gov/neo/rest/v1/feed?`;

export const fetchAsteroid = async (start, end) => {
    const { data } = await axios
      .get(URL, {
        params: {
          start_date: start,
          end_date: end,
          api_key: nasa_key,
        },
      })
    return data;
  
};
