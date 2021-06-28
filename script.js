const container = document.getElementById('container')

function createGrid(size) {
    while(container.lastElementChild) {
        container.removeChild(container.lastElementChild);
    }
    container.style.gridTemplateColumns = `repeat(${size}, auto)`;
    container.style.gridTemplateRows = `repeat(${size}, auto)`;
    for (let i = 0; i < size * size; i++) {
        let gridItem = document.createElement('div');
        gridItem.classList.add('gridItem')
        container.appendChild(gridItem);
    }
}

createGrid(16);