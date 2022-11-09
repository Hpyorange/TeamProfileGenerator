const Manager = require('../lib/Manager');

describe('Manager',()=>{
    describe('Create Manager object',() =>{

        it('should return manager obj with correct values',()=>{
            const manager = new Manager('Jasper',22,'jaspercheng2022@gmail.com',202);
    
            expect(manager.name).toEqual('Jasper');
            expect(manager.id).toEqual(22);
            expect(manager.email).toEqual('jaspercheng2022@gmail.com');
            expect(manager.officeNumber).toEqual(202);
        })

    })
})

describe('Manager',()=>{
    describe('Get Role',() =>{

        it('should return manager obj with correct values',()=>{
            const manager = new Manager('Jasper',22,'jaspercheng2022@gmail.com',202);

            expect(manager.getRole()).toEqual('Manager');
        })

    })
})