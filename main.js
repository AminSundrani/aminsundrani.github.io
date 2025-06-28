function startVoiceSearch() {
  alert('Voice search activated (simulation)');
}

function renderFeatured() {
  const container = document.getElementById('featuredListings');
  if (!container) return;
  properties.slice(0, 3).forEach((p) => {
    const card = document.createElement('div');
    card.className = 'property-card';
    card.innerHTML = `<h3>${p.title}</h3><p>$${p.price.toLocaleString()}</p><p>${p.location}</p>`;
    container.appendChild(card);
  });
}

window.addEventListener('DOMContentLoaded', renderFeatured);
