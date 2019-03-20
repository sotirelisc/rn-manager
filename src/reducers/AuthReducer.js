const initialState = {
  email: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'email_changed':
      return action.payload;
    default:
      return state;
  }
};