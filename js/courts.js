/**
 * Generates a string representation of star ratings using Unicode characters.
 * Full stars (★) for each whole number in the rating, and a half star (☆) for fractional part.
 *
 * @param {number} rating - The rating value, can be a decimal
 * @returns {string} A string containing star characters representing the rating
 */
function createStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '★';
    }
    if (hasHalfStar) stars += '☆';
    
    return stars;
}

/**
 * Renders a list of basketball courts into the HTML grid.
 * If no courts are found, displays a "No results found" message.
 *
 * @param {Array} courts - An array of court objects to render
 */
function renderCourts(courts) {
    const grid = document.getElementById('courtsGrid');
    const noResults = document.getElementById('noResults');
    
    if (courts.length === 0) {
        grid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }
    
    grid.style.display = 'grid';
    noResults.style.display = 'none';
    
    grid.innerHTML = courts.map(court => `
        <div class="court-card">
            <div class="court-header">
                <div>
                    <h3 class="court-name">${court.name}</h3>
                    <div class="address">📍 ${court.address}</div>
                </div>
                <div class="rating">
                    <span class="stars">${createStars(court.rating)}</span>
                    <span>${court.rating}</span>
                </div>
            </div>
            
            <div class="features">
                ${court.features.map(feature => 
                    `<span class="feature-tag">${feature}</span>`
                ).join('')}
            </div>
            
            <div class="description">${court.description}</div>
            
            <div class="court-footer">
                <div class="cost">💰 ${court.cost}</div>
                <div class="location-badge">${court.location}</div>
            </div>
        </div>
    `).join('');
}

/**
 * Filters the list of courts based on a search term and re-renders the grid.
 * The search checks the court's name, location, address, features, and description.
 *
 * @param {string} searchTerm - The term to filter courts by
 */
function filterCourts(searchTerm) {
    const filtered = courtData.filter(court => 
        court.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        court.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        court.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        court.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase())) ||
        court.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    renderCourts(filtered);
}
