import { EMPLOYEES_LOADED, EMPLOYEE_ADDED, LIST_LOADED_FIRST_TIME } from './constants';

export const initialState = {
  employees: [],
  newEmployee: null
};

// Read this: https://redux.js.org/basics/reducers

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEES_LOADED: {
      const { employees } = action.payload;
      // CAREFUL: You can't modify state variable directly.
      return Object.assign({}, state, { employees });
    }
    case EMPLOYEE_ADDED:{
      const {newEmployee} = action.payload;
      return Object.assign({},state,{newEmployee});
    }
    case LIST_LOADED_FIRST_TIME:{
      const {firstLoading} = false;
      return Object.assign({},state,{firstLoading});
    }
    default:
        return state
  }
};

export default appReducer;