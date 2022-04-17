// types
export const GET_FULL_LIST = "GET_FULL_LIST";
export const GET_COUNTRY_LIST = "GET_COUNTRY_LIST";
export const GET_IMAGE_LIST = "GET_IMAGE_LIST";

// reducer
const INITIAL_STATE = {
  list: [],
  countryList: [],
  imageList: []
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_FULL_LIST:
      return {
        ...state,
        list: action.payload,
      };
    case GET_COUNTRY_LIST:
      return {
        ...state,
        countryList: action.payload,
      };
    case GET_IMAGE_LIST:
      return {
        ...state,
        imageList: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
