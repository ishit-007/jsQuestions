function isLeap(year){
    return (year%100==0 && year%400!=0)?false:year%4==0;
}

const isLeapArrow=(year)=>(year%100==0 && year%400!=0)?false:year%4==0;

module.exports={
    isLeap:isLeap,
    isLeapArrow:isLeapArrow
}