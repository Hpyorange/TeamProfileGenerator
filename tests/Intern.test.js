const Intern = require('../lib/Intern');

describe('Intern',()=>{
    describe('Create intern object',() =>{

        it('should return intern obj with correct values',()=>{
            const intern = new Intern('Jasper',22,'jaspercheng2022@gmail.com',`BU`);
    
            expect(intern.name).toEqual('Jasper');
            expect(intern.id).toEqual(22);
            expect(intern.email).toEqual('jaspercheng2022@gmail.com');
            expect(intern.school).toEqual('BU');
        })

    })
})

describe('Intern',()=>{
    describe('Get school',() =>{

        it(`should return intern's school`,()=>{
            const intern = new Intern('Jasper',22,'jaspercheng2022@gmail.com',`BU`);
    
            expect(intern.getSchool()).toEqual('BU');
        })

    })
})

describe('Intern',()=>{
    describe('Get Role ',() =>{

        it('should return intern',()=>{
            const intern = new Intern('Jasper',22,'jaspercheng2022@gmail.com',`BU`);
    
            expect(intern.getRole()).toEqual('Intern');
        })

    })
})