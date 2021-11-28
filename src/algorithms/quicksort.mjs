//recursive quicksort
/*export default function quicksort(arrayay) {
    if (arrayay.length <= 1) {
      return arrayay;
    }
  
    var pivot = arrayay[0];
    
    var left = []; 
    var right = [];
  
    for (var i = 1; i < arrayay.length; i++) {
      arrayay[i] < pivot ? left.push(arrayay[i]) : right.push(arrayay[i]);
    }
    
    console.log(arrayay);
    return quicksort(left).concat(pivot, quicksort(right));
  };*/
  /*
  const swap = (arr, left, right) =>  {
    const temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp;
  }
  
  const partitionHigh = (arr, low, high) => {
    //Pick the first element as pivot
    let pivot = arr[high];
    let i = low;
    
    //Partition the array into two parts using the pivot
    for(let j = low; j < high; j++){
      if(arr[j] <= pivot){      
        swap(arr, i, j);
        i++;
      }
    }
    
    swap(arr, i, high);
    
    //Return the pivot index
    return i;
  }
  
  export default function quickSort(arr){
    //Stack for storing start and end index
    let stack = [];
    
    //Get the start and end index
    let start = 0;
    let end = arr.length - 1;
    
    //Push start and end index in the stack
    stack.push({x: start, y: end});
    
    //Iterate the stack
    while(stack.length){
      //Get the start and end from the stack
      const { x, y } = stack.shift();
      
      //Partition the array along the pivot
      const PI = partitionHigh(arr, x, y);
      
      //Push sub array with less elements than pivot into the stack
      if(PI - 1 > x){
        stack.push({x: x, y: PI - 1});
      }
      
      //Push sub array with greater elements than pivot into the stack
      if(PI + 1 < y){
        stack.push({x: PI + 1, y: y});
      }
    }
  }*/
  function partition(arr, start, end){
    // Taking the last element as the pivot
    const pivotValue = arr[end];
    let pivotIndex = start; 
    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
        // Swapping elements
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        // Moving to next element
        pivotIndex++;
        }
    }
    
    // Putting the pivot value in the middle
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]] 
    return pivotIndex;
};
 export default function quicksort(arr) {
    // Creating an array that we'll use as a stack, using the push() and pop() functions
    let stack = [];
    let list=[];
    // Adding the entire initial array as an "unsorted subarray"
    stack.push(0);
    stack.push(arr.length - 1);
    
    // There isn't an explicit peek() function
    // The loop repeats as long as we have unsorted subarrays
    while(stack[stack.length - 1] >= 0){
        
        // Extracting the top unsorted subarray
    	let end = stack.pop();
        let start = stack.pop();
        list.push(arr.slice());
        let pivotIndex = partition(arr, start, end);
        
        // If there are unsorted elements to the "left" of the pivot,
        // we add that subarray to the stack so we can sort it later
        if (pivotIndex - 1 > start){
        	stack.push(start);
            stack.push(pivotIndex - 1);
		}
        
        // If there are unsorted elements to the "right" of the pivot,
        // we add that subarray to the stack so we can sort it later
        if (pivotIndex + 1 < end){
        	stack.push(pivotIndex + 1);
            stack.push(end);
        }
    }
return list;}