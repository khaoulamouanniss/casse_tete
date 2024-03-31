const empty = ' ';
const maxLine = 3;
const maxColumn = maxLine;

/**
 * Cette fonction est conçue pour générer un nombre entier aléatoire entre deux bornes, min et max, incluses
 * @param {*} min la borne minimum de l'intervalle
 * @param {*} max la borne maximum de l'intervalle
 * @returns un nomre entier aléatoire
 */
function generateNumberRnd(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generatePuzzle() {
    const boxes = new Array(maxLine * maxColumn); // les chiffres à distribuer aléatoirement 
    // dans le casse-tête
    boxes.fill(0); // par défaut fill() débute à 0 jusqu'à length
    boxes.forEach((v, idx, t) => t[idx] = idx + 1); // => [1, 2, 3 , ... , length]
    boxes[boxes.length - 1] = empty;
    // for (let idx = 0; idx < cases.length; idx++)
    //     cases[idx] = idx + 1;

    // On veut construire qqc semblable à ceci:
    // ct2D = [
    //     l1 = [c1, c2, ... , MaxColonne],
    //     l2,
    //     ...
    //     MaxLigne
    // ]
 
    //}
    for (let i = boxes.length - 1; i > 0; i--) {
        const j = generateNumberRnd(0, i);
        [boxes[i], boxes[j]] = [boxes[j], boxes[i]]; // Échange des éléments à l'index i et j
      }
    
    
    // return [
    //     [1, 2, 3],
    //     [4, 5, Vide],
    //     [7, 8, 6],
    // ];

    let puzzle2D = [];
  for (let i = 0; i < maxLine; i++) {
    puzzle2D.push(boxes.slice(i * maxColumn, (i + 1) * maxColumn));
  }

  return puzzle2D;
}

export function swapBoxes(l1, c1, l2, c2, ct2D) {
    //let newPuzzle2D = [...ct2D];  // on clone ct2D; 
    // ici un clonage de premier niveau est suffisant.

    let newPuzzle2D = ct2D.map(row => [...row]); // Clonage profond
  [newPuzzle2D[l1][c1], newPuzzle2D[l2][c2]] = [newPuzzle2D[l2][c2], newPuzzle2D[l1][c1]]; // Échange
  return newPuzzle2D;
    // Voici un clonage une coche plus profond.
    // for (let l = 0; l < MaxLigne; l++) {
    //     nouveauCT2D[l] = [...ct2D[l]];
    // }

}

export function adjacentIsEmpty(line, column, ct2D) {
    const directions = [[0, -1], [-1, 0], [0, 1], [1, 0]]; // Haut, Gauche, Bas, Droite
    for (let [dl, dc] of directions) {
      const nl = line + dl, nc = column + dc;
      if (nl >= 0 && nl < maxLine && nc >= 0 && nc < maxColumn && ct2D[nl][nc] === empty) {
        return [nl, nc]; // Retourne les coordonnées de la case vide
      }
    }
    return null; // Aucune case vide adjacente
}

export function isWinner(ct2D) {

    let counter = 1;
    for (let i = 0; i < maxLine; i++) {
      for (let j = 0; j < maxColumn; j++) {
        if (i === maxLine - 1 && j === maxColumn - 1) {
          if (ct2D[i][j] !== empty) return false; // Dernière case doit être vide
        } else {
          if (ct2D[i][j] !== counter) return false; // Les autres cases doivent être en ordre croissant
          counter++;
        }
      }
    }
    return true; // Le puzzle est résolu
    // on traite la dernière ligne séparément
   
}