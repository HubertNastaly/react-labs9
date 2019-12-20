import { EMPLOYEES_LOADED, EMPLOYEE_ADDED, DATA_FETCHING_LAUNCHED, DATA_FETCHING_ERROR, SAVE_USER } from './constants';

export const employeesLoaded = (employees) => {
  return {
    type: EMPLOYEES_LOADED,
    payload: {
      employees
    }
  };
}

export const newEmployeeAdded = (newEmployee) => {
  return {
    type: EMPLOYEE_ADDED,
    payload: {
      newEmployee
    }
  };
}

export const dataFetchingLaunched = () => {
  return {
    type: DATA_FETCHING_LAUNCHED
  }
}

export const dataFetchingError = (error) => {
  return {
    type: DATA_FETCHING_ERROR,
    error: error
  }
}

export const fetchEmployees = () => {
  return (dispatch) => {
    dispatch(dataFetchingLaunched());
    return fetch('http://localhost:3004/employees')
      .then((data) => data.json())
      .then(
        (employees) => dispatch(employeesLoaded(employees)),
        (error) => dispatch(dataFetchingError(error))
      )
  } 
}


//PageLogin

export const saveUser = (user) => {
  return {
    type: SAVE_USER,
    payload:{
      user
    }
  }
}