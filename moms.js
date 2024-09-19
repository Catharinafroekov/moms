//moms procent parameter defineres//
const momsprocent = 25;

function momsBeregner(beloeb, moms = momsprocent) {
    const beloebMedMoms = beloeb + (beloeb * moms / 100);
    console.log("Beløbet med moms er: " + beloebMedMoms);
  }
  
 //kalder på funktion// 
momsBeregner(200);  