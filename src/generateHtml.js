const engineerCard = engineer =>{
    return`
    <div class="col-4 myCard swiper-slide">
        <div class="c-img" id="engineer"></div>
        <div class="c-text" >
            <h2>${engineer.name}</h2>
            <p class='id'>${engineer.id}</p>
            <p class="email">${engineer.email}</p>
            <P class="github">${engineer.github}</P>
        </div>
    </div>
    `
}

const internCard = intern =>{
    return`
    <div class="col-4 myCard swiper-slide">
        <div class="c-img" id="intern"></div>
        <div class="c-text" >
            <h2>${intern.name}</h2>
            <p class='id'>${intern.id}</p>
            <p class="email">${intern.email}</p>
            <P class="github">${intern.school}</P>
        </div>
    </div>
    `
}

const managerCard = manager =>{
    return`
    <div class="col-4 myCard swiper-slide">
        <div class="c-img" id="manager"></div>
        <div class="c-text" >
            <h2>${manager.name}</h2>
            <p class='id'>${manager.id}</p>
            <p class="email">${manager.email}</p>
            <P class="github">${manager.officeNum}</P>
        </div>
    </div>
    `
}



generateHtml = (data) => {

    // array for cards 
    cards = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 

        if (role === 'Engineer') {
            const engineerCard = engineerCard(employee);

            cards.push(engineerCard);
        }

        if (role === 'Intern') {
            const internCard = internCard(employee);

            cards.push(internCard);
        }

        if (role === 'Manager') {
            const managerCard = managerCard(employee);

            cards.push(managerCard);
        }
        
    }

    const allCards = cards.join('')

    const teamProfile = generateTeamPage(allCards); 
    return teamProfile;

}

const mainHtml=(cardsInfo)=>{

}