function tulosta()
{
  var etunimi = document.getElementById('enimi').value;
  var sukunimi = document.getElementById('snimi').value;
  if(etunimi == "" || sukunimi == "")
  {
    alert("Täytä kaikki kentät Hölmö saadaksesi jtn.");
  }
else
{
  document.getElementById('v1').innerHTML = "Heippa " + sukunimi + "" + etunimi;
}
}
