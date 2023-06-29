
let gridSize = 0;

function createSketchboard(size) {
  gridSize = size * size;
  const createPlayingField = document.createElement('div')
  createPlayingField.setAttribute('id', 'playingGrid')
  createPlayingField.style.height = `${gridSize}px`;
  createPlayingField.style.width = `${gridSize}px`;
  document.body.appendChild(createPlayingField);
  makeRows();
  return createPlayingField;
}



function makeRows() {
  let rowByColumn = Math.sqrt(gridSize);  
  const playingField = document.getElementById('playingGrid');
  for (let i = 0; i < rowByColumn; i++){
    const rowContainer = document.createElement('div');
    rowContainer.classList.add('rowContainer');
    for (j = 0; j < rowByColumn; j++) {
      const rowGrids = document.createElement('div');
      rowGrids.classList.toggle('grid');
      rowGrids.style.height = `${rowByColumn - 2}px`;
      rowGrids.style.width = `${rowByColumn - 2}px`;
      rowContainer.appendChild(rowGrids);
    }
    playingField.appendChild(rowContainer);
  }
}

/*
Create 16x16 grid 
think of a div or container as a single grid or square.

To make a row  {
  create a div as a parent container 
  create a div and give it the class 'grid'
  append to parent container
  display parent container as flex
}

*/