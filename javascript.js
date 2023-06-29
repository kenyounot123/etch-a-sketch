
const gridSize = 600;

function createSketchboard(size) {
  let rowByColumn = gridSize / size;
  makeRows(rowByColumn);
  return; 
}



function makeRows(numberOfGrids) {
  gridDimension = numberOfGrids - 2; 
  const playingField = document.getElementById('playingGrid');
  for (let i = 0; i < (gridSize / numberOfGrids); i++){
    const rowContainer = document.createElement('div');
    rowContainer.classList.add('rowContainer');
    for (j = 0; j < (gridSize / numberOfGrids); j++) {
      const rowGrids = document.createElement('div');
      rowGrids.classList.toggle('grid');
      rowGrids.style.height = `${gridDimension}px`;
      rowGrids.style.width = `${gridDimension}px`;
      rowContainer.appendChild(rowGrids);
    }
    playingField.appendChild(rowContainer);
  }
}

/*
Create 16x16 grid 
think of a div or container as a single grid or square.

To make a row  {
  get playing field size and divide by rowByColumn to adjust size of grids
  create a div as a parent container 
  create a div and give it the class 'grid'
  append to parent container
  display parent container as flex
}

*/
/*
const createPlayingField = document.createElement('div')
createPlayingField.setAttribute('id', 'playingGrid')
createPlayingField.style.height = `${gridSize}px`;
createPlayingField.style.width = `${gridSize}px`;
document.body.appendChild(createPlayingField);
*/