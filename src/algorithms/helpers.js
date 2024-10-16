
export const createKey = (groupA, groupB, groupC, groupD) => {
  return { groupA, groupB, groupC, groupD };
};
export function swap(array, i, j) {
  let c = array[i];
  array[i] = array[j];
  array[j] = c;
  return array;
}