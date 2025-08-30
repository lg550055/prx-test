const tempString = `
    <header>
        <a href="/" class="logo">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="map-pin">
            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>
        </svg>
        </a>
        <nav>
            <a href="#categories">Categories</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>    
`;

function loadTemplate() {
    const template = document.createElement('template');
    try {
        template.innerHTML = tempString;
    } catch (err) {
        console.error("Error loading template: ", err);
        return null;
    }

    const header = document.getElementsByTagName('body')[0];

    header.appendChild(template.content)
}

loadTemplate()