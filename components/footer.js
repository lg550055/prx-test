const footerStr = `
    <footer>
        <p>&copy; 2025 Places2Go 💡 All rights reserved.</p>
        <p><a href="#">Privacy Policy</a> | <a href="#">Terms</a></p>
    </footer>
`;

function loadTemplate() {
    const template = document.createElement('template');
    try {
        template.innerHTML = footerStr;
    } catch (err) {
        console.error("Error loading template: ", err);
        return null;
    }

    const header = document.getElementsByTagName('body')[0];

    header.appendChild(template.content)
}

loadTemplate()