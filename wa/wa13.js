//problem 1
let company_employees =
'{ "employees" : [' +
'{ "first_name":"sam" , "department":"tech" , "designation":"manager" , "salary":"40000" , "raise_eligible":"true"},' +
'{ "first_name":"mary" , "department":"finance" , "designation":"trainee" , "salary":"18500" , "raise_eligible":"true"},' +
'{ "first_name":"bill" , "department":"hr" , "designation":"executive" , "salary":"21200" , "raise_eligible":"false"},' +
'{ "first_name":"anna" , "department":"tech" , "designation":"executive" , "salary":"25600" , "raise_eligible":"false"}]}';


let company_data = JSON.parse(company_employees);

let first_employee = company_data.employees[0];
let second_employee = company_data.employees[1];
let third_employee = company_data.employees[2];

console.log("problem 1: \n");
console.log("employee 1:\n");
console.log("first name:" + first_employee.first_name + ", department:" + first_employee.department + ", destignation:" +first_employee.designation + ", salary:" + first_employee.salary + ", raise_eligible:" + first_employee.raise_eligible);
console.log("employee 2:\n");
console.log("first name:" + second_employee.first_name + ", department:" + second_employee.department + ", destignation:" + second_employee.designation + ", salary:" + second_employee.salary + ", raise_eligible:" + second_employee.raise_eligible);
console.log("employee 3:\n");
console.log("first name:" + third_employee.first_name + ", department:" + third_employee.department + ", destignation:" + third_employee.designation + ", salary:" + third_employee.salary + ", raise_eligible:" + third_employee.raise_eligible);

//problem 2 
let company_info = 
{"company": [{"company_name":"tech stars" , "website":"www.techstars.site" , "employees":company_employees}]};

let company_employees_array = company_data.employees;

console.log("problem 2:\n");
console.log("company name: " + company_info.company[0].company_name);
console.log("website: " + company_info.company[0].website);
console.log("employees:");
for (let i=0; i<company_employees_array.length; i++){
    console.log(company_employees_array[i].first_name);
}

//problem 3

let fourth_employee = company_data.employees[3];

console.log("problem 3:\n");
console.log("NEW employee 4:\n");
console.log("first name: " + fourth_employee.first_name + ", department: " + fourth_employee.department + ", designation: " + fourth_employee.designation + ", salary: " + fourth_employee.salary , ", raise eligible: " + fourth_employee.raise_eligible);

//problem 4 

let total_salary = 0; 

for (let i=0; i<company_data.employees.length; i++) {
    total_salary += parseInt(company_data.employees[i].salary);
}

console.log("problem 4:\n");
console.log("total salary of all listed employees: " + total_salary);

//problem 5

function give_raise(employee) {
    if (employee.raise_eligible==="true") {
      let employee_salary = parseInt(employee.salary);
      let raise_amount = employee_salary * 0.1;
      employee_salary += raise_amount;
      employee.employee_salary = employee_salary.toString();
      employee.raise_eligible = "false";
      console.log(employee.first_name + " received a raise of " + raise_amount.toFixed(2) + " - their new salary is " + employee.employee_salary + "!");
    } else {
      console.log(employee.first_name + " is not eligible for a raise. sorry :(");
    }
}

console.log("problem 5:\n");
give_raise(first_employee);
give_raise(second_employee);
give_raise(third_employee);
give_raise(fourth_employee);

//problem 6

let working_from_home = ["anna", "sam"];

for (let i=0; i<company_data.employees.length; i++) {
    if (working_from_home.includes(company_data.employees[i].first_name)) {
      company_data.employees[i].wfh = true;
    } else {
      company_data.employees[i].wfh = false;
    }
}

let updated_company_employees = JSON.stringify(company_data);

console.log("problem 6:\n");
console.log("employee 1:\n");
console.log("first name: " + first_employee.first_name + ", working from home: " + first_employee.wfh);
console.log("employee 2:\n");
console.log("first name: " + second_employee.first_name + ", working from home: " + second_employee.wfh);
console.log("employee 3:\n");
console.log("first name: " + third_employee.first_name + ", working from home: " + third_employee.wfh);
console.log("employee 4:\n");
console.log("first name: " + fourth_employee.first_name + ", working from home: " + fourth_employee.wfh);
