import { EMPLOYEES_LOADED, EMPLOYEE_ADDED, DATA_FETCHING_LAUNCHED, DATA_FETCHING_ERROR  } from './constants';

export const initialState = {
  employees: [],
  newEmployee: null,
  firstLoading: true,
  isListLoading: true
};

// Read this: https://redux.js.org/basics/reducers

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEES_LOADED: {
      const {isListLoading} = false;
      const { employees } = action.payload;
      // CAREFUL: You can't modify state variable directly.
      return Object.assign({}, state, { employees, isListLoading });
    }
    case EMPLOYEE_ADDED:{
      const {newEmployee} = action.payload;
      return Object.assign({},state,{newEmployee});
    }
    case DATA_FETCHING_LAUNCHED:{
      const {firstLoading} = false;
      const {isListLoading} = true;
      return Object.assign({},state,{firstLoading,isListLoading});
    }
    case DATA_FETCHING_ERROR:{
      console.log('Data fetching error!');
      return state;
    }
    default:
        return state
  }
};

export default appReducer;