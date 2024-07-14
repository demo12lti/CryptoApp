import axios from 'axios';

export const fetchPrices = (symbol) => async (dispatch) => {
  try {
    const response = await axios.get(`http://localhost:5000/api/prices/${symbol}`);
    dispatch({ type: 'FETCH_PRICES_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_PRICES_FAILURE', payload: error });
  }
};
