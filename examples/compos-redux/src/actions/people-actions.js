import * as types from './action-types';

export const addPerson = (person) => {
  return {
    type: types.ADD_PERSON,
    person
  };
}
