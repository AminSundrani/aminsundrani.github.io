function createCard(property) {
  const card = document.createElement('div');
  card.className = 'property-card';
  card.innerHTML = `<h3>${property.title}</h3><p>$${property.price.toLocaleString()}</p><p>${property.location}</p>`;
  return card;
}

function renderRecommendations(list) {
  const container = document.getElementById('recommendationList');
  container.innerHTML = '';
  list.forEach((p) => container.appendChild(createCard(p)));
}

function applyFilters() {
  const maxPrice = document.getElementById('priceRange').value;
  const location = document.getElementById('locationFilter').value.toLowerCase();
  const filtered = properties.filter((p) => {
    return p.price <= maxPrice && p.location.toLowerCase().includes(location);
  });
  renderRecommendations(filtered);
}

function showAgent(type) {
  const panel = document.getElementById('agentPanel');
  const info = {
    lifestyle: 'Information about local lifestyle.',
    finance: 'Mortgage and budgeting tips.',
    renovation: 'Potential renovation ideas.',
    area: 'School zones and transport links.',
  };
  panel.textContent = info[type];
}

window.addEventListener('DOMContentLoaded', () => renderRecommendations(properties));
