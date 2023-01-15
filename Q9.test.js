const Q9=require("./Q9")
test("replaces all characters of a string by their lexicographically next characters",()=>{
    expect(Q9.replaceChar("codeacademy")).toEqual("dpefbdbefnz")
    expect(Q9.replaceCharArrow("lazyinterns")).toEqual("mbazjoufsot")
})