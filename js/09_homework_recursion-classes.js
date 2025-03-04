// 09. Recursion
const company = {
    id: 1,
    name: 'Boss',
    salary: 10000,
    employees: [
        {
            id: 2,
            name: 'Chief Tech Officer',
            salary: 8000,
            employees: [
                { id: 3, name: 'Architect', salary: 6000 },
                {
                    id: 4,
                    name: 'Architect',
                    salary: 5500,
                    employees: [
                        {
                            id: 6,
                            name: 'Senior',
                            salary: 5000,
                        },
                        {
                            id: 7,
                            name: 'Senior',
                            salary: 4500,
                        },
                        {
                            id: 8,
                            name: 'Senior',
                            salary: 4500,
                            employees: [
                                { id: 9, name: 'Middle', salary: 5000 }
                            ]
                        },
                    ]
                },
                { id: 5, name: 'Architect', salary: 6500 }
            ]
        },
        {
            id: 13,
            name: 'Chief Finance Officer',
            salary: 7500,
            employees: [
                { id: 17, name: 'Accountant', salary: 3500 },
                {
                    id: 14,
                    name: 'Senior Accountant',
                    salary: 4500,
                    contractors: [
                        {
                            id: 16,
                            name: 'Senior',
                            salary: 4500,
                        },
                        {
                            id: 117,
                            name: 'Senior',
                            salary: 5500,
                        },
                        {
                            id: 18,
                            name: 'Senior',
                            salary: 5500,
                            bezdelniki: [
                                { id: 19, name: 'Middle', salary: 2500, }
                            ]
                        },
                    ]
                },
                { id: 5, name: 'Architect', salary: 6500 }
            ]
        }
    ],
    contractors: [
        { id: 1232, name: 'hello, world man' }
    ],
    testKey: 'testValue',
    testArray: [
        { id: 111, name: 'Test array name' },
        { id: 222, name: 'Test array name 2', salary: 10000 },
    ],
};
let salarySum = 0;
let dynamicSalarySum = 0;

// Basic data
const showObj = (obj) => {
    if (obj.salary > 0) salarySum += obj.salary

    if (!obj.employees || !obj.employees.length) return;

    for (let i = 0; i < obj.employees.length; i++) showObj(obj.employees[i]);
}

// Dynamic data
const showObjDynamic = (obj) => {
    if (obj.salary > 0) dynamicSalarySum += obj.salary

    const keys = Object.keys(obj);

    keys.forEach(key => {
        const item = obj[key];

        if (Array.isArray(item)) item.forEach(el => showObjDynamic(el))
    })
}

showObj(company);
console.log(`Basic data salary: ${salarySum}`);

showObjDynamic(company);
console.log(`\n\nDynamic data parse salary: ${dynamicSalarySum}`);
