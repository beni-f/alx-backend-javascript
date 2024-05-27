export default function appendToEachArrayValue(array, appendString) {
    let resultArray = [];
    for (let value of array) {
        value = appendString + value;
        resultString.push(value);
    }
    return resultArray;
}