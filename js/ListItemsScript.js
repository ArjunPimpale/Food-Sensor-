const itemList = document.querySelector('.item-list');

// Create and append 20 buttons (replace with your actual logic)
for (let i = 0; i < 20; i++) {
  const button = document.createElement('button');
  button.textContent = `Item ${i + 1}`;
  itemList.appendChild(button);
}
