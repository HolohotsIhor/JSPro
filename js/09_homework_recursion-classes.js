// 09. Recursion
const company = {
    id: 1,
    title: 'Boss',
    employees: [
        {
            id: 2,
            title: 'Chief Tech Officer',
            employees: [
                { id: 3, title: 'Architect' },
                {
                    id: 4,
                    title: 'Architect',
                    employees: [
                        {
                            id: 6,
                            title: 'Senior',
                        },
                        {
                            id: 7,
                            title: 'Senior',
                        },
                        {
                            id: 8,
                            title: 'Senior',
                            employees: [
                                { id: 9, title: 'Middle' }
                            ]
                        },
                    ]
                },
                { id: 5, title: 'Architect' }
            ]
        },
        {
            id: 13,
            title: 'Chief Finance Officer',
            employees: [
                { id: 17, title: 'Accountant' },
                {
                    id: 14,
                    title: 'Senior Accountant',
                    contractors: [
                        {
                            id: 16,
                            title: 'Senior',
                        },
                        {
                            id: 117,
                            title: 'Senior',
                        },
                        {
                            id: 18,
                            title: 'Senior',
                            bezdelniki: [
                                { id: 19, title: 'Middle' }
                            ]
                        },
                    ]
                },
                { id: 5, title: 'Architect' }
            ]
        }
    ],
    contractors: [
        { id: 1232, title: 'hello, world man' }
    ],
    testKey: 'testValue',
    testArray: [
        { id: 111, title: 'Test array title' },
        { id: 222, title: 'Test array title 2' },
    ],
};

// Basic data
const showObj = (obj) => {
    console.log(`${obj.id} - ${obj.title}`);

    if (!obj.employees || !obj.employees.length) return;

    for (let i = 0; i < obj.employees.length; i++) showObj(obj.employees[i]);
}

// Dynamic data
const showObjDynamic = (obj) => {
    console.log(`${obj.id} - ${obj.title}`);

    const keys = Object.keys(obj);

    keys.forEach(key => {
        const item = obj[key];

        if (Array.isArray(item)) item.forEach(el => showObjDynamic(el))
    })
}

console.log('Basic data parse: ')
showObj(company);

console.log('\n\nDynamic data parse: ')
showObjDynamic(company);
