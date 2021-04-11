export const saveClientTolocalStorage = (jwt) => {
  localStorage.setItem('jwt', JSON.stringify(jwt));
};

export const isLogged = () => {
  if (localStorage.getItem('jwt')) {
    return JSON.parse(localStorage.getItem('jwt'));
  } else {
    return false;
  }
};

export const logout = () => {
  localStorage.removeItem('jwt');
  document.cookie = 'token=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
};

export const checkAuth = (clientId) => {
  return isLogged().client._id === clientId;
};
