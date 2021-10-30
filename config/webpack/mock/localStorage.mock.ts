/* eslint-disable */
let localStorage;

if (typeof window !== 'undefined') {
  localStorage = window.localStorage;
} else {
  localStorage = {
    setItem() {},
    getItem() {},
  };
}

export default localStorage;
