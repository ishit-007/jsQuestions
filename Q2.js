function areDigitsSame(n){
    if(n<0){
        n=(n*-1);
    }
    if(n<=9 && n>=-9){
        return true;
    }
    // let ans=true;x
    let prevDigit=-1;
    while(n!=0){
        let digit=n%10;
        n=Math.floor(n/10);
        if(prevDigit!=-1 && prevDigit!=digit){
            return false;
        }
        prevDigit=digit;
    }
    return true;
}
const areDigitsSameArrow=(n)=>{
    if(n<0){
        n=(n*-1);
    }
    if(n<=9 && n>=-9){
        return true;
    }
    // let ans=true;x
    let prevDigit=-1;
    while(n!=0){
        let digit=n%10;
        n=Math.floor(n/10);
        if(prevDigit!=-1 && prevDigit!=digit){
            return false;
        }
        prevDigit=digit;
    }
    return true;
}
module.exports={
    areDigitsSame:areDigitsSame,
    areDigitsSameArrow:areDigitsSameArrow
}