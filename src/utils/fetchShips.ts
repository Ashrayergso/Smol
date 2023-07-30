import axios from 'axios';

const fetchShips = async () => {
  try {
    const response = await axios.get('/api/ships');
    if (response.status === 200) {
      return {
        type: "SHIP_FETCH_SUCCESS",
        payload: response.data
      };
    } else {
      throw new Error('Error fetching ships');
    }
  } catch (error) {
    console.error(error);
    return {
      type: "SHIP_FETCH_FAILURE",
      payload: error.message
    };
  }
};

export default fetchShips;