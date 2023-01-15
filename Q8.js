function countVowels(str){
    let count=0;
    const vowels=['a','e','i','o','u','A','E','I','O','U'];
    for(let ch of str){
        if(vowels.includes(ch)){
            count++;
        }
    }
    return count;
}
const countVowelsArrow=(str)=>{
    let count=0;
    const vowels=['a','e','i','o','u','A','E','I','O','U'];
    for(let ch of str){
        if(vowels.includes(ch)){
            count++;
        }
    }
    return count;
}
module.exports={
    countVowels:countVowels,
    countVowelsArrow:countVowelsArrow
}