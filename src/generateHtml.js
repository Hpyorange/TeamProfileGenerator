const engineerCard = engineer =>{
    return`
    <div class="col-3 myCard swiper-slide">

        <div class="c-img" id="engineer">
            <img src="./img/engineer.png">
        </div>

        <div class="c-text" >
            <h3>Engineer:${engineer.name}</h3>
            <p class='id'>ID:${engineer.id}</p>
            <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
        </div>

    </div>
    `
}

const internCard = intern =>{
    return`
    <div class="col-3 myCard swiper-slide">

        <div class="c-img" id="intern">
            <img src="./img/intern.png">
        </div>
        
        <div class="c-text" >
            <h3>Intern:${intern.name}</h3>
            <p class='id'>ID:${intern.id}</p>
            <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
            <P class="github">School:${intern.school}</P>
        </div>
    </div>
    `
}

const managerCard = manager =>{
    return`
    <div class="col-3 myCard swiper-slide">

        <div class="c-img" >
            <img src="./img/manager.png">
        </div>

        <div class="c-text" >
            <h3>Manager: ${manager.name}</h3>
            <p class='id'>ID:${manager.id}</p>
            <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
            <p class="office">Office Number: ${manager.officeNumber}</p>
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
            const engineer= engineerCard(employee);

            cards.push(engineer);
        }

        if (role === 'Intern') {
            const intern = internCard(employee);

            cards.push(intern);
        }

        if (role === 'Manager') {
            const manager = managerCard(employee);

            cards.push(manager);
        }
        
    }

    const allCards = cards.join('')

    const teamProfile = mainHtml(allCards); 
    return teamProfile;

}

const mainHtml=(cardsInfo)=>{
    return`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css">
    <link rel="stylesheet" href="mian.css">
</head>

<body>

    <div class="container flex-column align-content-center justify-content-center ">

        <div class="text-center mt-4 title">

            <h1>Team Profile</h1>

        </div>

            <div class="swiper mySwiper d-flex align-content-center col-10">

                <div class="swiper-wrapper">
                    ${cardsInfo}
                </div>

                <div class="swiper-pagination"></div>

                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div>


    </div>
</body>

    <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    <script src="./main.js"></script>

</html>
    `
}

module.exports = generateHtml;