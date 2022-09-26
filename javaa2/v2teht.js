function kolmel()
{
  var luku = [];
  luku[0] = document.getElementById('lu1').value;
  luku[1] = document.getElementById('lu2').value;
  luku[2] = document.getElementById('lu3').value;
  document.getElementById('t1').innerHTML = luku.sort();
}
