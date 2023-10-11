// Base class
class Post {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }

    // Method to display content
    display(html, elementId) {
        document.getElementById(elementId).innerHTML = html;
    }
}

// Subclass for Technical Posts
class TechnicalPost extends Post {
    constructor(title, content, codeSnippet) {
        super(title, content);
        this.codeSnippet = codeSnippet;
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
