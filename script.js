const container = document.getElementById('container');
const INCREMENT = 25.5;

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
}

function changeColor() {
    if (this.classList.contains('gridItem')) {
        this.classList.remove('gridItem');
        this.style.backgroundColor = randomColor();
    } else {
        c = window.getComputedStyle(this).backgroundColor;
        let rgb = c.match(/\d+/g);
        console.log(rgb);
        let r = parseInt(rgb[0]) - INCREMENT;
        r = r < 0 ? 0 : r;
        let g = parseInt(rgb[1]) - INCREMENT;
        g = g < 0 ? 0 : g;
        let b = parseInt(rgb[2]) - INCREMENT;
        b = b < 0 ? 0 : b;
        this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    }
}

function createGrid(size) {
    while(container.lastElementChild) {
        container.removeChild(container.lastElementChild);
    }
    container.style.gridTemplateColumns = `repeat(${size}, auto)`;
    container.style.gridTemplateRows = `repeat(${size}, auto)`;
    for (let i = 0; i < size * size; i++) {
        let gridItem = document.createElement('div');
        gridItem.classList.add('gridItem');
        gridItem.addEventListener('mouseover', changeColor);
        container.appendChild(gridItem);
    }
}

createGrid(16);