function concatenate(stringsArr){
    return stringsArr[0].substring(1)+stringsArr[1].substring(1);
}
const concatenateArrow=(stringsArr)=>{
    return stringsArr[0].substring(1)+stringsArr[1].substring(1);
}
module.exports={
    concatenate:concatenate,
    concatenateArrow:concatenateArrow
}