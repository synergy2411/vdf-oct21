let user = {
    firstName : "Foo",
    lastName : "Bar",
    sayHello : () => {
        return "Hello World"
    }
}

describe("Jasmine", () => {
    it("Spec 01", () => {
        expect(true).toBe(true)
        let spyHello = spyOn(user,"sayHello").and.returnValue("Hello")
        // let spyHello = spyOn(user,"sayHello").and.callThrough()
        expect(spyHello()).toEqual("Hello")
    })
})