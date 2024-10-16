import React from 'react';
import {createKey} from './helpers';
 
const BinarySearch = (array, position, arraySteps, colorSteps,search) => {
  let colorKey = colorSteps[colorSteps.length - 1].slice();
  let leftIdx = 0;
    let rightIdx = array.length;
    let midIdx = (leftIdx + rightIdx) / 2;
    midIdx = Math.floor(midIdx);
    
    while(leftIdx <= rightIdx) {
      let test = Math.floor(midIdx);
      arraySteps.push(array.slice());
      colorKey[test]=2;
      colorSteps.push(colorKey.slice());

        if(array[midIdx] == search) {
          //arraySteps.push(array.slice());
          colorKey[midIdx]=2;
          colorSteps.push(colorKey.slice());
            
            return;
        }
        
        else if(search < array[midIdx]) {
            rightIdx = midIdx - 1;
            midIdx = (leftIdx + rightIdx) / 2;
            midIdx = Math.floor(midIdx);
            
        }
        else if(search > array[midIdx]) {
            leftIdx = midIdx + 1;
            midIdx = (leftIdx + rightIdx) / 2;
            midIdx = Math.floor(midIdx);
            
        }
    }
};

export const BinarySearchKey = createKey('', '','','Element Found');
export const BinarySearchDesc = {
  title: 'Binary Search',
  description: (
    <p>
      <a
        href="https://en.wikipedia.org/wiki/Binary_search_algorithm"
        target="_blank"
        rel="noopener noreferrer"
      >
        Binary Search
      </a>{' '}
      is the most prominent example of a Divide and Conquer algorithm.
      Binary search is the search technique that works efficiently on sorted lists. Hence, to search an element into some list using the binary search technique, we must ensure that the list is sorted.
Binary search follows the divide and conquer approach in which the list is divided into two halves, and the item is compared with the middle element of the list. If the match is found then, the location of the middle element is returned. Otherwise, we search into either of the halves depending upon the result produced through the match.
    </p>
  ),
  worstCase: (
    <span>
      O(log n)
    </span>
  ),
  avgCase: (
    <span>
      O(log n)
    </span>
  ),
  bestCase: <span>O(1)</span>,
  space: <span>O(1)</span>
};
export default BinarySearch;
