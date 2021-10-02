import CONSTATNS from '../Redux_Constancts';

export const setCurrentUser = function (user) {
  return {
    type: CONSTATNS.SET_CURRENT_USER,
    payload: user,
  };
};
