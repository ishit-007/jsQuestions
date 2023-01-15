const Q7=require("./Q7");
test("concatenates 2 given strings except their first characters",()=>{
    expect(Q7.concatenate(["Code","Academy"])).toEqual("odecademy");
    expect(Q7.concatenateArrow(["Code","Academy"])).toEqual("odecademy");
})