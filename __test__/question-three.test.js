const sumEvenNumbers = require("../task/QuestionThree");

describe("sumEvenNumbers", () => {
    test('Input: { outer: 2, obj: { inner: 2, otherObj: { superInner: 2, notANumber: true, alsoNotANumber: "yup" } } } - Expected Output: 6', () => {
        const input = {
            outer: 2,
            obj: {
                inner: 2,
                otherObj: {
                    superInner: 2,
                    notANumber: true,
                    alsoNotANumber: "yup",
                },
            },
        };
        const result = sumEvenNumbers(input);
        expect(result).toBe(6);
    });

    test('Input: { a: 2, b: { b: 2, bb: { b: 3, bb: { b: 2 } } }, c: { c: { c: 2 }, cc: "ball", ccc: 5 }, d: 1, e: { e: { e: 4 }, ee: "car" } } - Expected Output: 12', () => {
        const input = {
            a: 2,
            b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
            c: { c: { c: 2 }, cc: "ball", ccc: 5 },
            d: 1,
            e: { e: { e: 4 }, ee: "car" },
        };
        const result = sumEvenNumbers(input);
        expect(result).toBe(12);
    });

    test('Input: { a: 1, b: { b: 3, bb: { b: 3 } }, c: { c: { c: 1 }, cc: "ball", ccc: 5 }, d: 1, e: { e: { e: 3 }, ee: "car" } } - Expected Output: 0', () => {
        const input = {
            a: 1,
            b: { b: 3, bb: { b: 3 } },
            c: { c: { c: 1 }, cc: "ball", ccc: 5 },
            d: 1,
            e: { e: { e: 3 }, ee: "car" },
        };
        const result = sumEvenNumbers(input);
        expect(result).toBe(0);
    });
});
