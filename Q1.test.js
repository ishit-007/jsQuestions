const Q1=require("./Q1");
test("gets the largest even number in an array",()=>{
    expect(Q1.largestEvenArrow([6,1,9,8,11])).toBe(8);
    expect(Q1.largestEvenArrow([1,3,5,7])).toBe(-1);
    expect(Q1.largestEven([61,99,12,7])).toBe(12);
    expect(Q1.largestEven([1,3,5,7])).toBe(-1);
})
