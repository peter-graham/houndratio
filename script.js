function calculateTotal() {
  var eabvpercentage = document.getElementById('abvpercentage');
  var eprice = document.getElementById('price');
  var esizeinml = document.getElementById('sizeinml');

  var abvpercentage = NaN;
  var price = NaN;
  var sizeinml = NaN;

  if (eabvpercentage && eabvpercentage.value) {
    abvpercentage = eabvpercentage.value;
  }
  if (eprice && eprice.value) {
    price = eprice.value;
  }
  if (esizeinml && esizeinml.value) {
    sizeinml = esizeinml.value;
  }

  /* calculate units and display result */
  var units = abvpercentage * (sizeinml / 1000);
  var divunits = document.getElementById('units');
  if(Number.isNaN(units) == false)
  {
    divunits.innerHTML = "<strong>" + parseInt(units) + "</strong>";
  }

  /* calculate price per unit and display result */
  var priceperunit = price / units;
  var divtotal = document.getElementById('priceperunit');
  if(Number.isNaN(priceperunit) == false)
  {
    divtotal.innerHTML = "<strong>" + "£" + round(priceperunit, 2) + "</strong>";
  }
}

// get the decimal value of the cost
function round(value, decimals) {
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals).toFixed(2);
}

// Allow only numbers to enter
function isNumber(value) {
  var i = (value.which) ? value.which : value.keyCode
  if (i != 46 && i > 31 && (i < 48 || i > 57)) {
    return false;
  }
  return true;
}