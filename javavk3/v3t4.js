function v3t4()
{
  var kertoma = document.getElementById('kertoma').value;
  var laske = 1;
  for(var i = 1; i<= kertoma; i++)
{
  laske*=i;
}
  document.getElementById('vastaus').innerHTML = " Luvun " + kertoma + " " + "kertoma on" + " " + laske;
}
