// Fonction de calcul sur une base de couleur avec densité
export const densite = (base, datas) => {
  // calcul des valeurs extrèmes des données
  // valeurs mini et maxi
  let valMax = 0;
  let valMin = 9999;
  // Parcours des données
  datas.forEach((val) => {
    if (val < valMin) {
      valMin = val;
    }
    if (val > valMax) {
      valMax = val;
    }
  });
  /* On utilise une densite de 10% à 90 %
   la différence est de 80% soit 0.8
   On découpe ce % en fonction
   des valeurs extremes (min/max)*/
  let nbVal = 0.8 / (valMax - valMin);
  // Tableau des valeurs à retourner
  let tabVal = [];
  let tabBorder = [];
  // densité de départ de 10%
  let deg = 0.1;
  // Parcours des données
  datas.forEach((val) => {
    // calcul de la transparence pour cette valeur
    // echelle de découpage x valeur actuelle + 10% (départ)
    let transp 
    
    // cas où les valeurs sont différentes
    if(valMin < valMax){transp=nbVal*val*0.8+deg}

    //cas ou toutes les valeurs sont les mêmes, on force à 0,7
    else {transp = val*0.7}


    // MAJ de la transparence
    let color = base.replace("#deg#", transp);
    let border = base.replace("#deg#", 1);
    // Ajout dans le tableau couleurs
    tabVal.push(color);
    tabBorder.push(border);
  });
  return [tabVal, tabBorder];
};


// Fonction de calcul aléatoire des couleurs type rgba
// Non exportable, car utilisee par une fonction interne
const couleur = (max) => {
    return Math.round(Math.random() * (max), 0);
}


export const aleatoire = (labels) => {
    let bgColor = []
    let bdColor = []

    labels.forEach(function(val){
   
    // On calcul la couleur du secteur

    let c1 = couleur (255)
    let c2 = couleur (255)
    let c3 = couleur (255)
    // avec tr = transparence
    let tr = 0.5

    // Couleur avec transparence
    let color = "rgba(" + [c1, c2,c3,tr].join(",") +")"
    bgColor.push(color)
    // Bordure sans transparence
    let border = "rgba(" + [c1, c2,c3].join(",") +")"
    bdColor.push(color)
 })
return [bgColor, bdColor]
}