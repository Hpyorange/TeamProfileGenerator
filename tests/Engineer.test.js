const Engineer = require('../lib/Engineer');

describe('engineer',()=>{
    describe('Create engineer object',() =>{

        it('should return engineer obj with correct values',()=>{
            const engineer = new Engineer('Jasper',22,'jaspercheng2022@gmail.com',`https://github.com/Hpyorange`);
    
            expect(engineer.name).toEqual('Jasper');
            expect(engineer.id).toEqual(22);
            expect(engineer.email).toEqual('jaspercheng2022@gmail.com');
            expect(engineer.github).toEqual('https://github.com/Hpyorange');
        })

    })
})

describe('engineer',()=>{
    describe('get engineer github ',() =>{

        it(`should return engineer's Github`,()=>{
            const engineer = new Engineer('Jasper',22,'jaspercheng2022@gmail.com',`https://github.com/Hpyorange`);
    
            expect(engineer.getGithub()).toEqual(`https://github.com/Hpyorange`);
        })

    })
})

describe('engineer',()=>{
    describe('get engineer github ',() =>{

        it(`should return engineer`,()=>{
            const engineer = new Engineer('Jasper',22,'jaspercheng2022@gmail.com',`https://github.com/Hpyorange`);
    
            expect(engineer.getRole()).toEqual(`Engineer`);
        })

    })
})
