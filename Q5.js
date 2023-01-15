function isLeap(year){
    if(year%100==0 && year%400!=0){
        return false;
    }
    return year%4==0;
}
const isLeapArrow=(year)=>{
    if(year%100==0 && year%400!=0){
        return false;
    }
    return year%4==0;
}
console.log(isLeapArrow(2000))