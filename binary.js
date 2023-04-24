// given an array num of numbers and target,returns the index if the target is
// found in the array else return null
function binary (num, target){
    let left=0;
    let right = num.length -1;
    while(left <= right){
        let middle = Math.floor((left+right)/2);
        if(num[middle]===target){
        return middle;

        }
        else if(num[middle]<target){
            left=middle+1;
        }
        else{
            right=middle -1;
        
        right=middle-1
        }
    }
    return null
}
let num=[3,4,6,10,15,26,47,56];
let target=47;
console.log(binary(num,target))

// margesort
function merge(arr){
    if(arr.length<= 1){
        return arr
    }
    let middle = Math.floor(arr.length/2)
    let left = arr.slice(0,middle);
    let right = arr.slice (middle);
    return divide(merge(left),merge(right));
}
function divide(left,right){
    let empty = [ ]
    while(left.length&&right.length){
        if(left[0]<right[0]){
            empty.push(left.shift());
        }
        else{
            empty.push(right.shift());
        }
    }
    return[...empty,...left,...right];
}
let arr = [46,21,31,29,56,40,28];
console.log(merge(arr));