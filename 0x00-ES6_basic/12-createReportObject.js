export default function createReportObject(employeesList) {
    let result = {
        allEmployees: employeesList,
        getNumberOfDepartments(a){
            return Object.keys(a).length;
        }
    };
    return result;
}
