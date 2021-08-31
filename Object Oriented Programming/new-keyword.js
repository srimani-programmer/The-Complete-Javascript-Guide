const Employee = function (
  employeeId,
  employeeName,
  employeeAge,
  employeeProfession
) {
  this.employeeId = employeeId;
  this.employeeName = employeeName;
  this.employeeAge = employeeAge;
  this.employeeProfession = employeeProfession;
  this.getEmployeeInformation = function () {
    return `EmployeeId: ${this.employeeId}\nEmployee Name: ${this.employeeName}\nEmployee Age: ${this.employeeAge}\nEmployee Profession: ${this.employeeProfession}`;
  };
};

const e1 = new Employee(123, "Jhon Doe", 29, "Software Engineer");
console.log(e1.getEmployeeInformation());
console.log(e1);
