import utils from "../utilities/utils";

const locationReducer = (state = '', action) => {
  switch(action.type) {
    case 'GET_LOCATION':
      state = {
        name: action.payload ? 
          action.payload : 'United States', 
        string: utils.formatLocationStr(action.payload ? 
          action.payload : 'United States')
      }

      // if (action.payload) {
      //   console.log(action.payload)
      //   state = { 
      //     name: action.payload ? action.payload : 'United States', 
      //     string: utils.formatLocationStr(action.payload) 
      //   };
      // } else {
      //   state = { 
      //     name: 'The United States', 
      //     string: utils.formatLocationStr('United States') 
      //   };
      // }
      return state;
    default:
      return state;
  }
}

export default locationReducer;