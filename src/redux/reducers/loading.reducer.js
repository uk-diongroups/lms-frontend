import * as t from 'redux/types/load.type';

const initialState = {
  //loading makes the Component rerender
  loading: false,
  loadTypes: [],
};

const loading = (state = initialState, action) => {
  switch (action.type) {
    case t.LOADING:
      return {
        ...state,
        loading: true,
        loadTypes: [...state.loadTypes, action.payload],
      };
    case t.CONTINUE_LOADING:
      return {
        ...state,
        loading: true,
      };
    case t.END_LOADING:
      return {
        ...state,
        loading: false,
        loadTypes: state.loadTypes.filter((type) => type !== action.payload),
      };
    default:
      return state;
  }
};

export default loading;
