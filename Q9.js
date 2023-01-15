function replaceChar(str){
    let ans="";
    for(let ch of str){
        if(ch=='Z'){
            ans+='A';
        }
        else if(ch=='z'){
            ans+='a';
        }
        else{
            ans+=String.fromCharCode(ch.charCodeAt(0)+1);
        }
    }
    return ans;
}
const replaceCharArrow=(str)=>{
    let ans="";
    for(let ch of str){
        if(ch=='Z'){
            ans+='A';
        }
        else if(ch=='z'){
            ans+='a';
        }
        else{
            ans+=String.fromCharCode(ch.charCodeAt(0)+1);
        }
    }
    return ans;
}
console.log(replaceCharArrow("codeacademy"));
console.log(replaceCharArrow("lazyinterns"));
