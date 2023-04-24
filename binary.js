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
function margeSortNum(arr){
    if(arr.length<2){
        return arr
    }
    let mid=Math.floor(arr.length/2)
    let leftArr=arr.slice(0,mid)
    let rightArr=arr.slice(mid)
    return mergeNum(margeSortNum(leftArr),margeSortNum(rightArr))
    }
    function mergeNum(leftArr,rightArr){
    let sortedArr=[]
    while(leftArr.length && rightArr.length){
        if(leftArr[0]<= rightArr[0]){
            sortedArr.push(leftArr.shift())
    }else{
        sortedArr.push(leftArr.shift())
    }
    }
    [...sortedArr,...leftArr,...rightArr]
    
    }
    let arr=[12,23,43,20,45]
    let target1=20
    console.log(margeSortNum(arr))
    