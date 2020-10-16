import axios from '@/utils/axios';

export const signInStudent = async (creds) => {
  const { data } = await axios.post('/auth/check', creds);

  return data;
}


export const setToken = (token) => {
  window.localStorage.setItem('testy-token', JSON.stringify(token));
}

export const getToken = () => JSON.parse(window.localStorage.getItem('testy-token'));
