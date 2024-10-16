import React from 'react';
import {createKey} from './helpers';

const InsertionSort = (array, position, arraySteps, colorSteps) => {
  let colorKey = colorSteps[colorSteps.length - 1].slice();

  let i, j, key;
  for (i = 1; i < array.length; i++) {
      key = array[i];
      j = i - 1;

      while (j >= 0 && array[j] > key) {
          array[j + 1] = array[j];
          arraySteps.push(array.slice());
          colorKey[i] = 3;
          if (i === j + 1) {
              colorKey[j + 1] = 3;
          } else {
              colorKey[j + 1] = 1;
          }
          colorKey[j] = 1;
          colorSteps.push(colorKey.slice());
          colorKey[j + 1] = 0;
          colorKey[i] = 0;
          colorKey[j] = 0;
          j = j - 1
      }
      array[j + 1] = key;
      arraySteps.push(array.slice());
      colorSteps.push(colorKey.slice());
  }
  colorSteps[colorSteps.length - 1] = new Array(array.length).fill(2);
}

export const InsertionSortKey = createKey(
  'UnSorted',
  'Swapping',
  'Compare',
  'Sorted'
);
export const InsertionSortDesc = {
  title: 'Insertion Sort',
  description: (
    <p>
      <a
        href="https://en.wikipedia.org/wiki/Insertion_sort"
        target="_blank"
        rel="noopener noreferrer"
      >
        Insertion Sort
      </a>{' '}
      is a simple sorting algorithm that iterates through an array and
      at each iteration it removes one element from the array, finds the
      location it belongs to in the sorted list and inserts it there,
      repeating until no elements remain in the unsorted list. It is an
      in-place, stable sorting algorithm that is inefficient on large
      input arrays but works well for data sets that are almost sorted.
      It is more efficient in practice compared to other quadratic
      sorting algorithms like bubble sort and selection sort.
    </p>
  ),
  worstCase: (
    <span>
      O(n<sup>2</sup>)
    </span>
  ),
  avgCase: (
    <span>
      O(n<sup>2</sup>)
    </span>
  ),
  bestCase: <span>O(n)</span>,
  space: <span>O(1)</span>
};

export default InsertionSort;
