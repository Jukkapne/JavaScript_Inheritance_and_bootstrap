function displayPost() {
    let techPost = new TechnicalPost("Understanding OOP", "OOP stands for Object-Oriented Programming.", "console.log('Hello, OOP!');");
    techPost.display(techPost.getHtml(), "postContainer");
}
