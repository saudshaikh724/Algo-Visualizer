import React from 'react';
import {createKey} from './helpers';


const LinearSearch = (array, position, arraySteps, colorSteps,search) => {
	let colorKey = colorSteps[colorSteps.length - 1].slice();
    //let search = 100;
    //var val = undefined;
    //console.log('Search:',search,array)
    for(let j = 0; j < array.length; j++){
      console.log(search);
      
        if(array[j] == search){
          
          arraySteps.push(array.slice());
          colorKey[j] = 2;
          colorSteps.push(colorKey.slice());
            //val = array.indexOf(array[j]); 
            //colorSteps[val].fill(2); 
          

            
            return;
            //colorSteps[colorSteps.length - 1] = new Array(array.length).fill(2);
            //val = array.indexOf(array[j]);  
            
        }
        // else {
        //      arraySteps.push(array.slice());
        //      colorKey[j] = 1;
        //      colorSteps.push(colorKey.slice());
        //      //console.log(arraySteps,colorKey,colorSteps)
            
        // }
      
        }
        }
    

export const LinearSearchKey = createKey('', '','','Search Element Found');
export const LinearSearchDesc = {
  title: 'Linear Search',
  description: (
    <p>
      <a
        href="https://en.wikipedia.org/wiki/Linear_search"
        target="_blank"
        rel="noopener noreferrer"
      >
        Linear Search
      </a>{' '}
       is used on a collections of items. It relies on the technique of traversing a list from start to end by exploring properties of all the elements that are found on the way.
       <p>For example, consider an array of integers of size  N. You should find and print the position of all the elements with value . Here, the linear search is based on the idea of matching each element from the beginning of the list to the end of the list with the integer , and then printing the position of the element if the condition is `True'.</p></p>
       
  ),
  worstCase: (
    <span>
      O(n<sup></sup>)
    </span>
  ),
  avgCase: (
    <span>
      O(n/2)
    </span>
  ),
  bestCase: <span>O(1)</span>,
  space: <span>O(1)</span>
};
export default LinearSearch;
