function longestString(stringsArr){
    let maxLength=-1;
    let string="";
    for(let str of stringsArr){
        if(str.length>maxLength){
            maxLength=str.length;
            string=str;
        }
    }
    return string;
}
const longestStringArrow=(stringsArr)=>{
    let maxLength=-1;
    let string="";
    for(let str of stringsArr){
        if(str.length>maxLength){
            maxLength=str.length;
            string=str;
        }
    }
    return string;
}
module.exports={
    longestString:longestString,
    longestStringArrow:longestStringArrow
}
