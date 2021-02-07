import * as t from 'redux/types/message.type';


const INITIAL_STATE = {
  error: false,
  success: false,
  message: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case t.GET_ERRORS:
      return {
        error: true,
        message: action.payload,
        success: false
      };

    case t.GET_SUCCESS:
      return {
        error: false,
        message: action.payload,
        success: true
      };

    case t.CLEAR_MESSAGES:
      return {
        error: false,
        success: false,
        message: ''
      };

    default:
      return state;
  }
};
