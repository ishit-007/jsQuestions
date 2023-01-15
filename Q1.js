function largestEven(arr){
    const evenArr=arr.filter((n)=>n%2==0);
    return (evenArr.length==0?-1:Math.max(...evenArr))
}

const largestEvenArrow=(arr)=>{
    const evenArr=arr.filter((n)=>n%2==0);
    return (evenArr.length==0?-1:Math.max(...evenArr))
}
module.exports={
    largestEvenArrow:largestEvenArrow,
    largestEven:largestEven
}
