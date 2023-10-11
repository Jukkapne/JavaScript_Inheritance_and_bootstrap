// Base class
class Post {
    constructor(title, content) {
        this.title = title;
        this.content = content;
        this.backgroundColor = "white";  // default background color
    }

    // Method to display content
    display(html, elementId) {
        let container = document.getElementById(elementId);
        container.innerHTML = html;
        container.style.backgroundColor = this.backgroundColor;
    }
}

// Subclass for Technical Posts
class TechnicalPost extends Post {
    constructor(title, content, codeSnippet) {
        super(title, content);
        this.codeSnippet = codeSnippet;
        this.backgroundColor = "#e6f7ff"; // light blue for technical posts
   
    }

    getHtml() {
        return `
            <h2>${this.title}</h2>
            <p>${this.content}</p>
            <pre>${this.codeSnippet}</pre>
        `;
    }
}

// Subclass for Travel Posts
class TravelPost extends Post {
    constructor(title, content, location) {
        super(title, content);
        this.location = location;
        this.backgroundColor = "#e6ffe6"; // light green for travel posts

    }

    getHtml() {
        return `
            <h2>${this.title} (${this.location})</h2>
            <p>${this.content}</p>
            <button onclick="displayDetailedTravelPost()">See More Details</button>
        `;
    }
    
}

// Subclass for Personal Posts
class PersonalPost extends Post {
    constructor(title, content, mood) {
        super(title, content);
        this.mood = mood;
        this.backgroundColor = "#fff0e6"; // light peach for personal posts
 
    }

    getHtml() {
        return `
            <h2>${this.title} - Feeling: ${this.mood}</h2>
            <p>${this.content}</p>
        `;
    }
}



class DetailedTravelPost extends TravelPost {
    constructor(title, content, location, duration, attractions, anecdote) {
        super(title, content, location);
        this.duration = duration;
        this.attractions = attractions;
        this.anecdote = anecdote;
        this.backgroundColor = "#ccffcc"; // a slightly darker green for detailed travel posts
  
    }

    getHtml() {
        return `
            <h2>Detailed Info: ${this.title} (${this.location})</h2>
            <p><strong>Duration:</strong> ${this.duration}</p>
            <p><strong>Main Attractions:</strong> ${this.attractions.join(', ')}</p>
            <p><strong>Anecdote:</strong> ${this.anecdote}</p>
            <p>${this.content}</p>
        `;
    }
}
