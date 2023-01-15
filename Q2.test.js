const Q2=require("./Q2");
test("checks if all the digits of a given number are same",()=>{
    expect(Q2.areDigitsSame(2232)).toBe(false);
    expect(Q2.areDigitsSame(77)).toBe(true);
    expect(Q2.areDigitsSameArrow(632)).toBe(false);
    expect(Q2.areDigitsSameArrow(1111)).toBe(true);
})