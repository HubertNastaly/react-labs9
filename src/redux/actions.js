import { EMPLOYEES_LOADED, EMPLOYEE_ADDED, LIST_LOADED_FIRST_TIME } from './constants';

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

export const listLoadedFirstTime = () => {
  return {
    type: LIST_LOADED_FIRST_TIME
  }
}