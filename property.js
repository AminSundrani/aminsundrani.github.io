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
