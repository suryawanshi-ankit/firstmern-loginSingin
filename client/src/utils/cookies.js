import Cookies from 'universal-cookie';
const cookies = new Cookies();

export const setToken = (token) => {
  cookies.set('jwttoken', token, {
    expires: new Date(Date.now() + 258920000),
  });
}

export const getToken = () => {
  return cookies.get('jwttoken');
}
