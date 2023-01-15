const Q4=require("./Q4")
test("gives the longest string from a given array of strings",()=>{
    expect(Q4.longestString(["we", "love", "code", "academy"])).toEqual("academy");
    expect(Q4.longestStringArrow(["we", "love", "code", "academy"])).toEqual("academy");
})