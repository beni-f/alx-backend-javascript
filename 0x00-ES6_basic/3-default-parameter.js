export default function getSumOfHoods(...args) {
    if (args[1] === undefined) {
        args[1] = 89;
    }
    if (args[2] === undefined) {
        args[2] = 19;
    }
    let sum = 0;
    for(let arg of args)
    {
        sum += arg;
    }
    return sum;
}
