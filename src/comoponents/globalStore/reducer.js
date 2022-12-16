export const initialState = {
  user: null,
  dark: false,
};

const reducer = (state, action) => {
  console.log(action);
  const { type, payload } = action();

  switch (type) {
    case "UPDATE_USER":
      return {
        ...state,
        user: payload.user,
      };
    default:
      return state;
  }
};

export default reducer;
