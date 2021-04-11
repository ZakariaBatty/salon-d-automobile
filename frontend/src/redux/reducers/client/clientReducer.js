import clientTypes from '../../types/clientTypes';

const initialState = {
  currentClient: null,
  clients: [],
  clientError: null,
  clientSuccess: false,
};

const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case clientTypes.GET_CAR:
      return {
        ...state,
        clients: action.payload,
      };
    case clientTypes.AUTH:
      return {
        ...state,
        clients: action.payload,
        clientError: null,
        clientSuccess: !state.clientSuccess,
      };
    case clientTypes.REGISTER:
      return {
        ...state,
        clientSuccess: !state.clientSuccess,
      };
    case clientTypes.CHEK_AUTH:
      return {
        ...state,
        clients: action.payload,
      };
    case clientTypes.GETALLCAR:
      return {
        ...state,
        clients: action.payload,
      };
    case clientTypes.ESSAI_CAR:
      return {
        ...state,
        clients: action.payload,
      };
    case clientTypes.RESERVE:
      return {
        ...state,
        clients: action.payload,
      };
    case clientTypes.CLIENT_ERROR:
      return {
        ...state,
        clientError: action.payload,
      };
    case 'TOGGLE_SUCCESS':
      return {
        ...state,
        clientSuccess: !state.clientSuccess,
      };
    default:
      return state;
  }
};

export default clientReducer;
