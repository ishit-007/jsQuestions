function replaceChar(str){
    let ans="";
    for(let ch of str){
        ans+=(ch=='Z')?'A':(ch=='z')?'a':String.fromCharCode(ch.charCodeAt(0)+1);
    }
    return ans;
}
const replaceCharArrow=(str)=>{
    let ans="";
    for(let ch of str){
        ans+=(ch=='Z')?'A':(ch=='z')?'a':String.fromCharCode(ch.charCodeAt(0)+1);
    }
    return ans;
}
console.log(replaceChar("codeacademy"));
console.log(replaceCharArrow("lazyinterns"));
