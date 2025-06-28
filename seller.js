function generateDescription() {
  const address = document.getElementById('addressInput').value;
  const size = document.getElementById('sizeInput').value;
  const features = document.getElementById('featuresInput').value;
  const description = `A lovely ${size} sq ft property at ${address}. Features: ${features}`;
  document.getElementById('descriptionOutput').textContent = description;
  document.getElementById('priceOutput').textContent = '$' + (size * 200).toLocaleString();
}
