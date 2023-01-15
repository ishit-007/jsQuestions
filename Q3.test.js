const Q3=require('./Q3');
test("converts uppercase letters to lowercase and vice-versa",()=>{
    expect(Q3.changeCase("CodeAcademy")).toBe("cODEaCADEMY")
    expect(Q3.changeCaseArrow("CodeAcademy")).toBe("cODEaCADEMY")
})