//big O(n2) >> nested loop

function selectionSort(array){
    for(var i = 0; i < array.length-1; i++){
        var mini = i;
        for(var j = i+1; j < array.length; j++){
         if (array[j] < array[mini]){
             var mini = j;
         } 
        }
        if(mini != i){
            var element = array[i]
            array[i] = array[mini]
            array[mini] = element 
            
        }
        
    }
    return array
}
console.log(selectionSort([2,5,6,1,34,55,11,4,63,7,1]))