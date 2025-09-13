let emp = [
  { name: "Kim", department: "Sales", salary: 15000 },
  { name: "Jim", department: "Eng", salary: 45000 },
  { name: "Rim", department: "Sales", salary: 60000 },
  { name: "Tim", department: "Eng", salary: 90000 },
  { name: "Sim", department: "Fin", salary: 15000 },
];

//output : { Sales: 37500, Eng: 67500, Fin: 15000 }

let result = emp.reduce((acc, item) => {
  let { department, salary } = item;

  if (!acc[item.department]) {
    acc[item.department] = { salaryCount: 0, countDep: 0 };
  }
  acc[item.department].countDep += 1;
  acc[item.department].salaryCount += salary;
  return acc;
}, {});

let blank = {};
for (val in result) {
  let { salaryCount, countDep } = result[val];
  if (!blank[val]) {
    blank[val] = {};
  }
  blank[val] = salaryCount / countDep;
}

console.log(blank);
