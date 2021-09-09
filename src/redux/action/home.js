import {getData} from '../../utils';

const {default: Axios} = require('axios');
const {API_HOST} = require('../../config');

export const getHomeTotal = () => (dispatch) => {
  getData('token').then((resToken) => {
    Axios.get(`${API_HOST.url}/dashboard`, {
      headers: {
        'x-token': resToken.value,
      },
    })
      .then((res) => {
        dispatch({type: 'SET_HOME_TOTAL', value: res.data.total});
      })
      .catch(() => {});
  });
};

export const getRecentLoggedIn = () => (dispatch) => {
  getData('token').then((resToken) => {
    Axios.get(`${API_HOST.url}/recentloggedin`, {
      headers: {
        'x-token': resToken.value,
      },
    })
      .then((res) => {
        dispatch({type: 'SET_RECENT_LOGEDIN', value: res.data});
      })
      .catch(() => {});
  });
};
