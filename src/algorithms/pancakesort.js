export default function pancakesort(array) {
    for (var i = array.length - 1; i >= 1; i--) {
        // find the index of the largest element not yet sorted
        var max_idx = 0;
        var max = array[0];
        for (var j = 1; j <= i; j++) {
            if (array[j] > max) {
                max = array[j];
                max_idx = j;
            }
        }
 
        if (max_idx == i) 
            continue; // element already in place
 
        var new_slice;
 
        // flip array max element to index 0
        if (max_idx > 0) {
            new_slice = array.slice(0, max_idx+1).reverse();
            for ( j = 0; j <= max_idx; j++) 
                array[j] = new_slice[j];
        }
 
        // then flip the max element to its place
        new_slice = array.slice(0, i+1).reverse();
        for ( j = 0; j <= i; j++) 
            array[j] = new_slice[j];
    }
    return array;}