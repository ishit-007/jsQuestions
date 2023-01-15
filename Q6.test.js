const Q6=require("./Q6");
test("checks if a given string ends with 'Script'",()=>{
    expect(Q6.containsScript("JavaScript")).toBe(true);
    expect(Q6.containsScriptArrow("TypeScript")).toBe(true);
    expect(Q6.containsScript("manuscript")).toBe(false);
})