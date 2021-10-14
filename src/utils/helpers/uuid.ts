export function createUniqId() {
  const total = 100;
  const array = new Uint32Array(total);
  const index = Math.floor(Math.random() * total);

  return crypto.getRandomValues(array)[index];
}
