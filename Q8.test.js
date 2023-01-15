const Q8=require("./Q8")
test("counts the numbe of vowels present in a given string",()=>{
    expect(Q8.countVowels("CodeAcademy")).toEqual(5);
    expect(Q8.countVowelsArrow("CodeAcademy")).toEqual(5);
})