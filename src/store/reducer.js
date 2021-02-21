export default (
  state = {
    
  },
  action
) => {
  switch (action.type) {
    case "DO_GET_DATA":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
