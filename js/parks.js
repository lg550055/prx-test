/**
 * Renders a list of parks into the HTML grid.
 * If no parks are found, displays a "No results found" message.
 *
 * @param {Array} parks - An array of park objects to render
 */

function renderParks(parks) {
    const root = document.getElementById('parksGrid');
    root.innerHTML = parks.map(park => `
        <div class="park-card">
            <div class="park-header">
                <div class="park-name">${park.name}</div>
                <div class="park-neighborhood">${park.neighborhood}</div>
                <div class="adjacent-neighborhoods">Close to: ${park.adjacent}</div>
            </div>
            <div class="park-content">
                <div class="park-description">
                    ${park.description}
                </div>
                <div class="park-address">
                    <a href="${park.address.url}" target="_blank" class="address-link">📍 ${park.address.text}</a>
                </div>
                <div class="hours-info">
                    🕐 ${park.hours}
                </div>
                <div class="amenities">
                    ${park.amenities.map(a => `
                        <div class="amenity ${a.status}">
                            <span class="emoji">${a.emoji}</span>
                            <span>${a.label}</span>
                            <div class="tooltip">${a.tooltip}</div>
                        </div>
                    `).join('')}
                </div>
                <div class="special-features">
                    <h4>✨ Special Features</h4>
                    <p>${park.features}</p>
                </div>
                ${park.website ? `<a href="${park.website}" class="website-link" target="_blank">Visit Website</a>` : ""}
            </div>
        </div>
    `).join('');
}

/**
 * Filters the list of parks based on a search term and re-renders the grid.
 * The search checks the park's name, location, address, features, and description.
 *
 * @param {string} searchTerm - The term to filter parks by
 */
function filterParks(searchTerm) {
    searchTerm = searchTerm.trim().toLocaleLowerCase();
    if (searchTerm === "") {
        renderParks(parkData);
        return;
    }
    const filtered = parkData.filter(park => 
        park.name.toLowerCase().includes(searchTerm) ||
        park.neighborhood.toLowerCase().includes(searchTerm) ||
        park.adjacent.toLowerCase().includes(searchTerm) ||
        park.address.text.toLowerCase().includes(searchTerm) ||
        park.amenities.some(
            amnty => amnty.label.toLowerCase().includes(searchTerm)
                || amnty.tooltip.toLowerCase().includes(searchTerm)) ||
        park.features.toLowerCase().includes(searchTerm) ||
        park.description.toLowerCase().includes(searchTerm)
    );
    renderParks(filtered);
}
