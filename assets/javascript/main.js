function displayTechnicalPost() {
    let techPost = new TechnicalPost("Understanding OOP", "OOP stands for Object-Oriented Programming.", "console.log('Hello, OOP!');");
    techPost.display(techPost.getHtml(), "postContainer");
}

function displayPersonalPost() {
    let personalPost = new PersonalPost("My Day at the Beach", "I had a wonderful time soaking up the sun.", "Joyful");
    personalPost.display(personalPost.getHtml(), "personalContainer");
}

function displayTravelPost() {
    let travelPost = new TravelPost("Adventures in Rome", "The Colosseum was an awe-inspiring sight!", "Rome, Italy");
    
    // Resetting the container before displaying new content.
    document.getElementById("travelContainer").innerHTML = "";
    travelPost.display(travelPost.getHtml(), "travelContainer");
}


function displayDetailedTravelPost() {
    let detailedPost = new DetailedTravelPost(
        "Adventures in Rome", 
        "The Colosseum was an awe-inspiring sight!", 
        "Rome, Italy", 
        "5 days", 
        ["Colosseum", "Trevi Fountain", "Pantheon"], 
        "We had the most amazing gelato near the Pantheon!"
    );
    detailedPost.display(detailedPost.getHtml(), "travelContainer");
}
