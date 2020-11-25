/**
 * initial state for reducer
 */
export const initialState = {
  brandFiltersArray: [],
  tagFiltersArray: [],
  clearFilter: false,
  priceMin: null,
  priceMax: null,
  rating: null,
  clicked: {},
};
/**
 * a Reducer to maintain global state with the help of
 * actions
 *
 * @param {Object} state - a global state
 * @param {Object} action - an action declaring the type of process to perform
 */
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BRAND_FILTER":
      return {
        ...state,
        brandFiltersArray: [...state.brandFiltersArray, action.item.label],
      };

    case "REMOVE_FROM_BRAND_FILTER":
      return {
        ...state,
        brandFiltersArray: [
          ...state.brandFiltersArray.filter(
            (element) => element !== action.item.label
          ),
        ],
      };
    case "ADD_TO_TAG_FILTER":
      return {
        ...state,
        tagFiltersArray: [...state.tagFiltersArray, action.item.label],
      };

    case "REMOVE_FROM_TAG_FILTER":
      return {
        ...state,
        tagFiltersArray: [
          ...state.tagFiltersArray.filter(
            (element) => element !== action.item.label
          ),
        ],
      };
    case "ADD_PRICE_RANGE":
      return {
        ...state,
        priceMin: action.item.min,
        priceMax: action.item.max,
      };
    case "UPDATE_RATING":
      return {
        ...state,
        rating: action.item,
      };
    case "POPULATE_OLDSTATE":
      return {
        brandFiltersArray: action.item.brandFiltersArray,
        tagFiltersArray: action.item.tagFiltersArray,
        priceMin: action.item.priceMin,
        priceMax: action.item.priceMax,
        rating: action.item.rating,
      };
    case "CLEAR_FILTER":
      return {
        ...state,
        brandFiltersArray: [],
        tagFiltersArray: [],
        priceMin: null,
        priceMax: null,
        clearFilter: !state.clearFilter,
      };

    default:
      return state;
  }
};

export default reducer;