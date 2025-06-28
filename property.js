function showTab(tab) {
  const content = {
    suburb: 'Statistics and demographic info about the suburb.',
    roi: 'Projected return on investment based on market data.',
    renovation: 'Suggested renovation ideas with estimated costs.',
  };
  document.getElementById('tabContent').textContent = content[tab];
}

function voiceAsk() {
  alert('Voice query about this property (simulation)');
}

function loadProperty() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'), 10);
  const p = properties.find((prop) => prop.id === id) || properties[0];
  document.getElementById('propertyImg').src = p.image;
  document.getElementById('propertyTitle').textContent = p.title;
  document.getElementById('propertyPrice').textContent = '$' + p.price.toLocaleString();
}

window.addEventListener('DOMContentLoaded', loadProperty);
