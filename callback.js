function settleLife(name, isDeveloper, marriage, patri) {
  if (isDeveloper) {
    // console.log(`No Tension ${name}, biye pakka.`);
    marriage(patri);
  }
}

function boloKobul(patri) {
  console.log(patri,'Kobul Kobul Kobul')
}

settleLife('Shadhin', true , boloKobul, 'Humaira')
// boloKobul('Humaira')