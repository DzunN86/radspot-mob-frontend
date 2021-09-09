import Axios from 'axios';
import {API_HOST} from '../../config';
import {showMessage, storeData} from '../../utils';
import {setLoading} from './global';

export const loginAction = (form, navigation) => (dispatch) => {
  dispatch(setLoading(true));
  if (!form.username || !form.password) {
    showMessage('Username & password harus diisi');
    dispatch(setLoading(false));

    return;
  }
  Axios({
    method: 'get',
    url: `${API_HOST.url}/auth/login`,
    auth: {
      username: form.username,
      password: form.password,
    },
  })
    .then((res) => {
      const token = res.headers['x-token'];
      dispatch(setLoading(false));
      storeData('token', {value: token});
      navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
    })
    .catch((err) => {
      dispatch(setLoading(false));
      showMessage(err.response.data.message || 'Invalid Login');
    });
};
