import utils from "../utilities/utils";

const locationReducer = (state = '', action) => {
  switch(action.type) {
    case 'GET_LOCATION':
      state = {
        name: action.payload ? 
          action.payload : 'The United States', 
        string: utils.formatLocationStr(action.payload ? 
          action.payload : 'United States')
      }
      return state;
    default:
      return state;
  }
}

export default locationReducer;