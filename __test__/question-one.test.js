const manualSortDescending = require("../task/QuestionOne");

describe("Manual Sort Descending", () => {
    test("Mengurutkan array dari terbesar ke terkecil", () => {
        const inputArray = [1, 2, 4, 3, 5, 3, 2, 1];

        const expected = [5, 4, 3, 3, 2, 2, 1, 1];

        const result = manualSortDescending(inputArray);

        expect(result).toEqual(expected);
    });
});
