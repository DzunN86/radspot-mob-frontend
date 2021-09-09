const initHome = {
  total: [],
  recentLoggedIn: [],
};

export const homeReducer = (state = initHome, action) => {
  if (action.type === 'SET_HOME_TOTAL') {
    return {
      ...state,
      total: action.value,
    };
  }
  if (action.type === 'SET_RECENT_LOGEDIN') {
    return {
      ...state,
      recentLoggedIn: action.value,
    };
  }

  return state;
};
