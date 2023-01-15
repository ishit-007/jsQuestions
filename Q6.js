function containsScript(str){
    return str.endsWith("Script");
}
const containsScriptArrow=(str)=>{
    return str.endsWith("Script");
}
module.exports={
    containsScript:containsScript,
    containsScriptArrow:containsScriptArrow
}