function changeCase(str){
    let ans="";
    for(let ch of str){
        if(ch>='A' && ch<='Z'){
            ans+=(ch+"").toLowerCase();
        }
        else if(ch>='a' && ch<='z'){
            ans+=(ch+"").toUpperCase()
        }
        else{
            ans+=ch
        }
    }
    return ans;
}
const changeCaseArrow=(str)=>{
    let ans="";
    for(let ch of str){
        if(ch>='A' && ch<='Z'){
            ans+=(ch+"").toLowerCase();
        }
        else if(ch>='a' && ch<='z'){
            ans+=(ch+"").toUpperCase()
        }
        else{
            ans+=ch
        }
    }
    return ans;
}
module.exports={
    changeCase:changeCase,
    changeCaseArrow:changeCaseArrow
}
