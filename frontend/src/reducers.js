const initialState = {
  prices: []
};

const priceReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRICES':
      return {
        ...state,
        prices: action.payload
      };
    default:
      return state;
  }
};

export default priceReducer;
