const Employee = require('../lib/Employee');

describe('employee',()=>{
    describe('Create employee object',() =>{

        it('should return Employee obj with correct values',()=>{
            const employee = new Employee('Jasper',22,'jaspercheng2022@gmail.com');
    
            expect(employee.name).toEqual('Jasper');
            expect(employee.id).toEqual(22);
            expect(employee.email).toEqual('jaspercheng2022@gmail.com');
        })

    })
}
)

describe('get name',()=>{
    describe('get employee name',() =>{

        it('should return Employee name',()=>{
            const employee = new Employee('Jasper',22,'jaspercheng2022@gmail.com');
    
            expect(employee.getName()).toEqual('Jasper');

        })

    })
}
)

describe('get id',()=>{
    describe('get employee id',() =>{

        it('should return Employee id',()=>{
            const employee = new Employee('Jasper',22,'jaspercheng2022@gmail.com');
    
            expect(employee.getId()).toEqual(22);

        })

    })
}
)

describe('get email',()=>{
    describe('get employee email',() =>{

        it('should return Employee name',()=>{
            const employee = new Employee('Jasper',22,'jaspercheng2022@gmail.com');
    
            expect(employee.getEmail()).toEqual('jaspercheng2022@gmail.com');

        })

    })
}
)

describe('get role',()=>{
    describe('get role of employee',() =>{

        it(`should return Employee's role'`,()=>{
            const employee = new Employee('Jasper',22,'jaspercheng2022@gmail.com');
    
            expect(employee.getRole()).toEqual('Employee');

        })

    })
}
)