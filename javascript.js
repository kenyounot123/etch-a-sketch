
const GRID_SIZE = 600;
const playingField = document.getElementById('playingGrid');
const sliderValue = document.getElementById('sliderValue');
const sliderSize = document.getElementById('sizeSlider');

createSketchboard(16);
sliderSize.addEventListener('change', sliderChanged);


function createSketchboard(size) {
  let rowByColumn = GRID_SIZE / size;
  makeRows(rowByColumn);
  return; 
}
function makeRows(numberOfGrids) {
  gridDimension = numberOfGrids;
  for (let i = 0; i < (Math.floor(GRID_SIZE / numberOfGrids)); i++){
    const rowContainer = document.createElement('div');
    rowContainer.classList.add('rowContainer');
    for (j = 0; j < (Math.floor(GRID_SIZE / numberOfGrids)); j++) {
      const rowGrids = document.createElement('div');
      rowGrids.classList.toggle('grid');
      rowGrids.classList.add('needToRemove');
      rowGrids.style.height = `${gridDimension}px`;
      rowGrids.style.width = `${gridDimension}px`;
      rowContainer.appendChild(rowGrids);
    }
    playingField.appendChild(rowContainer);
  }
  const allRows = document.querySelectorAll('.grid');
  allRows.forEach((row) => row.addEventListener('mouseover', gridWhenHovered));

}

function gridWhenHovered(e) {
  e.target.style.backgroundColor = 'black';
}


function sliderChanged(e) {
  resetGrid();
  sliderValue.innerText = `${e.target.value}x${e.target.value}`;
  let newGridSize = e.target.value;
  createSketchboard(newGridSize);
}

function resetGrid() {
  let removeGrids = document.querySelectorAll('.needToRemove');
  console.log(removeGrids);
  removeGrids.forEach((grid) => grid.remove());
}