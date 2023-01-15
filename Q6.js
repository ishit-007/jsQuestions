function containsScript(str){
    if(str.length<6){
        return false;
    }
    return str.endsWith("Script");
}
const containsScriptArrow=(str)=>{
    if(str.length<6){
        return false;
    }
    return str.endsWith("Script");
}
console.log(containsScriptArrow("javaScript"))