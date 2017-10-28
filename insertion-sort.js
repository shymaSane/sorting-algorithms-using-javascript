//O(n2)-nested loop 



function insertionSort(array){
 for(var i = 1; i<array.length; i++){
   var element = array[i];
   var j = i;
     while(j>0 && array[j-1] >element){
       array[j] = array[j-1];
       var j = j-1;
       array[j] = element;
     }
  }

   return array;
}

console.log(insertionSort([7,4,1,6,9,67,23,45,12,23,90,43,2,4,63]))