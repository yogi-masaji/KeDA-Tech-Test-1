const maxSubarraySum = require("../task/QuestionTwo");

describe("maxSubarraySum", () => {
    test("Menghitung jumlah maksimum subarray dengan panjang 2", () => {
        const inputArray = [100, 200, 300, 400];
        const result = maxSubarraySum(inputArray, 2);
        expect(result).toBe(700);
    });

    test("Menghitung jumlah maksimum subarray dengan panjang 4", () => {
        const inputArray = [1, 4, 2, 10, 23, 3, 1, 0, 20];
        const result = maxSubarraySum(inputArray, 4);
        expect(result).toBe(39);
    });

    test("Menghitung jumlah maksimum subarray dengan panjang 2 (negatif termasuk)", () => {
        const inputArray = [-3, 4, 0, -2, 6, -1];
        const result = maxSubarraySum(inputArray, 2);
        expect(result).toBe(5);
    });

    test("Panjang subarray melebihi panjang array - Expected Output: null", () => {
        const inputArray = [1, 2, 3, 4, 5];
        const result = maxSubarraySum(inputArray, 7);
        expect(result).toBe(null);
    });

    test("Array kosong - Expected Output: null", () => {
        const inputArray = [];
        const result = maxSubarraySum(inputArray, 1);
        expect(result).toBe(null);
    });
});
