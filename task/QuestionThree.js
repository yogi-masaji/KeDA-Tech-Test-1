function sumEvenNumbers(obj) {
    let sum = 0;

    function traverseObject(obj) {
        for (const key in obj) {
            if (typeof obj[key] === "object") {
                traverseObject(obj[key]);
            } else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
                sum += obj[key];
            }
        }
    }

    traverseObject(obj);
    return sum;
}

module.exports = sumEvenNumbers;
