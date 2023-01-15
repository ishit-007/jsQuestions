const Q5=require("./Q5");
test("checks if a given year is leap year",()=>{
    expect(Q5.isLeap(2000)).toBe(true);
    expect(Q5.isLeapArrow(1900)).toBe(false);
    expect(Q5.isLeap(2016)).toBe(true);
})