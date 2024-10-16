import React from 'react';
import {createKey} from './helpers';
import {swap} from './helpers';



 
const BubbleSort = (array, position, arraySteps, colorSteps) => {
	let colorKey = colorSteps[colorSteps.length - 1].slice();

	for (let i = 0; i < array.length - 1; i++) {
		for (let j = 0; j < array.length - i - 1; j++) {
          
            if (array[j] > array[j + 1]) {
              //console.log(arraySteps,colorSteps,colorKey)
                array = swap(array, j, j + 1);
            }
            colorKey[j] = 1;
            colorKey[j+1] = 1;
            arraySteps.push(array.slice());
            colorSteps.push(colorKey.slice());
            colorKey[j] = 0;
            colorKey[j+1] = 0;
        }
        colorKey[array.length - 1 -i] = 2;
        arraySteps.push(array.slice());
        colorSteps.push(colorKey.slice());
	}
    colorSteps[colorSteps.length - 1] = new Array(array.length).fill(2);
    return;
};

export const BubbleSortKey = createKey('Unsorted', 'Comparing & Swapping','','Sorted');
export const BubbleSortDesc = {
  title: 'Bubble Sort',
  description: (
    <p>
      <a
        href="https://en.wikipedia.org/wiki/Bubble_sort"
        target="_blank"
        rel="noopener noreferrer"
      >
        Bubble Sort
      </a>{' '}
      is a simple sorting algorithm that repeatedly steps through the
      list, compares adjacent elements and swaps them if they are in the
      wrong order.The pass through the list is repeated until the list
      is sorted. The algorithm, which is a comparison sort, is named for
      the way smaller or larger elements "bubble" to the top of the
      list. Although the algorithm is simple, it is too slow and
      impractical for most problems
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
export default BubbleSort;
