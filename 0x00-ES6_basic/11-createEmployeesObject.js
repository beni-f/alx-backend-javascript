export default function createEmployeesObject(departmentName, employees) {
    let result = {};
    result[departmentName] = employees;
    return result;
}