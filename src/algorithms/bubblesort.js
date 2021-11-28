export default function bubblesort(array) {
    for(var i = 0; i < array.length; i++){
     
        // Last i elements are already in place  
        for(var j = 0; j < ( array.length - i -1 ); j++){
            
          // Checking if the item at present iteration 
          // is greater than the next iteration
          if(array[j] > array[j+1]){
              
            // If the condition is true then swap them
            var temp = array[j]
            array[j] = array[j + 1]
            array[j+1] = temp
            //await new Promise(resolve => setTimeout(resolve,10));
          }
        }
      }
  return array;};

  console.log(bubblesort([4,5,3,2,1,6,7,10,9,8]));