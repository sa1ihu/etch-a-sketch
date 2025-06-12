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
    square.style.backgroundColor = `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;

function randomRGB() {
  return Math.floor(Math.random() * 256); // 0–255
}

  });

    container.appendChild(square);
  }
}

document.getElementById('resize-button').addEventListener('click', () => {
  let newSize = parseInt(prompt("Enter new grid size (max 100):"));

  // Validate input
  if (isNaN(newSize) || newSize < 1 || newSize > 100) {
    alert("Please enter a valid number between 1 and 100.");
    return;
  }

  createGrid(newSize);
});


// Create default 16x16 grid on page load
createGrid(16);
