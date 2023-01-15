function largestEven(arr){
    const evenArr=arr.filter((n)=>n%2==0);
    return (evenArr.length==0?-1:Math.max(...evenArr))
}

const largestEvenArrow=(arr)=>{
    const evenArr=arr.filter((n)=>n%2==0);
    return (evenArr.length==0?-1:Math.max(...evenArr))
}

console.log(largestEven([1,2,3,4]))
console.log(largestEvenArrow([1,3,5,7]))