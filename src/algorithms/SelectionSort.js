import React from 'react';
import {createKey} from './helpers';
import { swap } from './helpers';


const SelectionSort = (array, position, arraySteps, colorSteps) => {
  let colorKey = colorSteps[colorSteps.length - 1].slice();
  for (let i = 0; i < array.length - 1; i ++) {
      let min_index = i;
      for (let j = i + 1; j < array.length; j ++) {
          if (array[j] < array[min_index]) {
              min_index = j;
          }
          colorKey[i] = 1;
          colorKey[j] = 1;
          arraySteps.push(array.slice());
          colorSteps.push(colorKey.slice());
          colorKey[i] = 0;
          colorKey[j] = 0;
      }
      swap(array, min_index, i);
      colorKey[i] = 2;
      arraySteps.push(array.slice());
      colorSteps.push(colorKey.slice());
  }
  colorSteps[colorSteps.length - 1] = new Array(array.length).fill(2);
}

export const SelectionSortKey = createKey('UnSorted','Comparing & Swapping','','Sorted');

export const SelectionSortDesc = {
  title: 'Selection Sort',
  description: (
    <p>
      <a
        href="https://en.wikipedia.org/wiki/Selection_sort"
        target="_blank"
        rel="noopener noreferrer"
      >
        Selection Sort
      </a>{' '}
      is an in-place comparison sorting algorithm that divides the input
      list into two parts: the sublist of items already sorted, which is
      built up from left to right at the front (left) of the list, and
      the sublist of items remaining to be sorted that occupy the rest
      of the list. Initially, the sorted sublist is empty and the
      unsorted sublist is the entire input list. The algorithm proceeds
      by finding the smallest element in the unsorted sublist,
      exchanging (swapping) it with the leftmost unsorted element
      (putting it in sorted order), and moving the sublist boundaries
      one element to the right.
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
  bestCase: (
    <span>
      O(n<sup>2</sup>)
    </span>
  ),
  space: <span>O(1)</span>
};

export default SelectionSort;
