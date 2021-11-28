export default function selectionsort(array) {
    let n = array.length;
    let list=[];    
    for(let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray
        let min = i;
        for(let j = i+1; j < n; j++){
            if(array[j] < array[min]) {
                min=j; 
            }
         }
         if (min != i) {
             // Swapping the elements
             let tmp = array[i]; 
             array[i] = array[min];
             array[min] = tmp;      
        }
        list.push(array.slice());
    }
    return list;}