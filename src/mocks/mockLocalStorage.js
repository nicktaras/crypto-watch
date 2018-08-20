const storageKey = 'cryptoWatchDbCoins';

export const clear = () => {
  localStorage.removeItem(storageKey);
}

export const set = (data) => {
  let dataToJSON = JSON.stringify(data);
  localStorage.setItem(storageKey, dataToJSON); 
}

export const get = () => {
  let data = localStorage.getItem(storageKey);
  return JSON.parse(data);
}
