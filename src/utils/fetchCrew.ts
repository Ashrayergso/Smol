import axios from 'axios';

const fetchCrew = async () => {
  try {
    const response = await axios.get('/api/crew');
    if (response.status === 200) {
      return {
        type: 'CREW_FETCH_SUCCESS',
        payload: response.data
      };
    } else {
      throw new Error('Error fetching crew data');
    }
  } catch (error) {
    console.error(error);
    return {
      type: 'CREW_FETCH_FAILURE',
      error
    };
  }
};

export default fetchCrew;