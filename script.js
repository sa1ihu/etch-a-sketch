function createGrid(size) {
  const container = document.getElementById('container');
  container.innerHTML = ''; // Clear existing grid

  const squareSize = 960 / size; // keep total width 960px

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    // Add hover effect
    square.addEventListener('mouseenter', () => {
    square.style.backgroundColor = '#333';
  });

    container.appendChild(square);
  }
}

// Create default 16x16 grid on page load
createGrid(16);
