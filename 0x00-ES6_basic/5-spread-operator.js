export default function concatArrays(array1, array2, string) {
    let string_to_array = [...string];
    let result = [...array1, ...array2, ...string_to_array];
    return result;
}