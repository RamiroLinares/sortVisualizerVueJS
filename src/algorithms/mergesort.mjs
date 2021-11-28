/*function merge(left, right) {
    let array = []
    // Break out of loop if any one of the arrayay gets empty
    while (left.length && right.length) {
        // Pick the smaller among the smallest element of left and right sub arrayays 
        if (left[0] < right[0]) {
            array.push(left.shift())  
        } else {
            array.push(right.shift()) 
        }
    }
    
    // Concatenating the leftover elements
    // (in case we didn't go through the entire left or right arrayay)
    return [ ...array, ...left, ...right ]
}

export default function mergesort(arrayay) {
    const half = arrayay.length / 2
  
    // Base case or terminating case
    if(arrayay.length < 2){
      return arrayay 
    }
    
    const left = arrayay.splice(0, half)
    return merge(mergesort(left),mergesort(arrayay))
  }*/

export default function mergeSort(array) {
    let list=[];
    var sorted = array.slice(),
        n = sorted.length,
        buffer = new Array(n);
  
    for (var size = 1; size < n; size *= 2) {
      for (var leftStart = 0; leftStart < n; leftStart += 2*size) {
        var left = leftStart,
            right = Math.min(left + size, n),
            leftLimit = right,
            rightLimit = Math.min(right + size, n),
            i = left;
        while (left < leftLimit && right < rightLimit) {
          if (sorted[left] <= sorted[right]) {
            buffer[i++] = sorted[left++];
          } else {
            buffer[i++] = sorted[right++];
          }
        }
        while (left < leftLimit) {
          buffer[i++] = sorted[left++];
        }
        while (right < rightLimit) {
          buffer[i++] = sorted[right++];
        }
      }
      var temp = sorted,
          sorted = buffer,
          buffer = temp;
    
       list.push(sorted); }
  
    return list;
  }