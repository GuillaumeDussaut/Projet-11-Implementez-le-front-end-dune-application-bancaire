const initialState = {
  token: null,
  userName: '',
  firstName: '',
  lastName: '',
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_AUTH_TOKEN':
      return {
        ...state,
        token: action.payload,
      };
    case 'SET_USER_NAME':
      return {
        ...state,
        userName: action.payload,
      };
    case 'SET_FIRST_NAME':
      return {
        ...state,
        firstName: action.payload,
      };
    case 'SET_LAST_NAME':
      return {
        ...state,
        lastName: action.payload,
      };
    default:
      return state;
  }
}
