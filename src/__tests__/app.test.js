const { getCurrentMonth } = require("../app");
const { isAdmin } = require("../app");


describe("app test - getCurrentMonth", () => {
    test("should return the current month", () => {
        let thisMonth = getCurrentMonth();
        expect(thisMonth).toBe("September");
    });
});

describe("app tests suites - isAdmin", () => {
    test("should return false as user is not admin", () => {
        const result = isAdmin();
        expect(result).toBe(false);
    });

    test("should return true as user is admin", () => {
        const result = isAdmin("admin");
        expect(result).toBe(true);
    });
});
