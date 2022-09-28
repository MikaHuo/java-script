function luku()
{
  //var l1, l2, l3, l4, l5



 var l1 = document.getElementById('l1').value;
  var l2 = document.getElementById('l2').value;
  var l3 = document.getElementById('l3').value;
  var l4 = document.getElementById('l4').value;
  var l5 = document.getElementById('l5').value;
  var luvut = l1, l2, l3, l4, l5;
  var tulos = parseFloat(l1) + parseFloat(l2) + parseFloat(l3) + parseFloat(l4) +
   parseFloat(l5);
  //var summa;
  //summa = l1 + l2 + l3 + l4 + l5;
  var keskiarvo = tulos / 5;
  document.getElementById('v1').innerHTML = "summa" + " " + "on " + tulos + " "+ "keskiarvo" +" " + "on " + keskiarvo;
}
