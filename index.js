const generateHtml= require('./src/generateHtml');

const fs = require("fs")
const inquirer = require("inquirer");

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { inherits } = require('util');

const team = [];

const managerInfo = () =>{
    return inquirer.createPromptModule([
        {
            type:'input',
            name:'name',
            message:`Please Enter manager's name: `,
            validate: value => {
                if (value) {
                    return true;
                } else {
                    console.log ("Required information! Please enter the name to continue 😀");
                    return false; 
                }
            }
        },
        {
            type:'input',
            name:'id',
            message:`Please Enter manager's ID: `,
            validate: value => {
                if (value) {
                    return true;
                } else {
                    console.log ("Required information! Please enter the ID to continue 😀");
                    return false; 
                }
            }
        },
        {
            type:'input',
            name:'email',
            message:`Please Enter manager's email: `,
            validate: value => {
                emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
                if (emailFormat) {
                    return true;
                } else {
                    console.log (`Required information! Please enter a valid email address(sample@gmail.com) to continue 😀`);
                    return false; 
                }
            }
        },
        {
            type:'input',
            name:'officeNum',
            message:`Please Enter manager's office number `,
            validate: value => {
                if (value) {
                    return true;
                } else {
                    console.log ("Required information! Please enter the office number to continue 😀");
                    return false; 
                }
            }
        }
    ])
    .then(userInput=>{
        const{name,id,email,officeNum} = userInput;
        const manager = new Manager(name,id,email,officeNum);
        team.push(manager);
        console.log(`Manger Info: ${manager}`)
    })
}

const teamMember=()=>{
    //separator
    console.log(`****************
    Let's choose the team members`)

    return inquirer.prompt([
    {
        type:`rawlist`,
        name:'role',
        message:'Please choose the role of your team member',
        choices:['Engineer','Intern']
    },
    {
        type:'input',
        name:'name',
        message:`Please Enter the name of this team member: `,
        validate: value => {
            if (value) {
                return true;
            } else {
                console.log ("Required information! Please enter the name to continue 😀");
                return false; 
            }
        }
    },
    {
        type:'input',
        name:'id',
        message:`Please Enter the ID of this team member: `,
        validate: value => {
            if (value) {
                return true;
            } else {
                console.log ("Required information! Please enter the ID to continue 😀");
                return false; 
            }
        }
    },
    {
        type:'input',
        name:'email',
        message:`Please Enter email of this team member: `,
        validate: value => {
            emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
            if (emailFormat) {
                return true;
            } else {
                console.log (`Required information! Please enter a valid email address(sample@gmail.com) to continue 😀`);
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: `Please enter github username of this team member:`,
        when: (data) => data.role === "Engineer",
        validate: value => {
            if (value ) {
                return true;
            } else {
                console.log (`Required information! Please enter the github username to continue 😀`)
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: `Please enter the school of this team member:`,
        when: (data) => data.role === "Intern",
        validate: value => {
            if (value ) {
                return true;
            } else {
                console.log (`Required information! Please enter the school name to continue 😀`)
                return false;
            }
        }
    },
    {
        type:'confirm',
        name:'addMore',
        message:'Adding more team members?'
    }
])
.then( teamMemberInfo => {
    let{name,id,email,role,github,school,addMore} = teamMemberInfo;
    let teamMember;

    if (role === "Engineer") {
        teamMember = new Engineer (name, id, email, github);

        console.log(teamMember);

    } else if (role === "Intern") {
        teamMember = new Intern (name, id, email, school);

        console.log(teamMember);
    }

    team.push(teamMember); 

    if(addMore){
        return teamMember(team);
    } else{
        return team;
    }
})
};


const writeFile = data =>{
    fs.writeFile('./dist/index.html',data,err=>
    err ? console.error(err) : console.log('The team profile has been successfully created! 😋'))
}

function init() { 
    managerInfo()
        .then(teamMember)
        .then(team=>{
            return generateHtml(team)
        })
        .then(htmlPage=>{
            return writeFile(htmlPage);
        })
        .catch(err=>{
            console.log(err)
        })
}


init();