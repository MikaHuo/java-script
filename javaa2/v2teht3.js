function pariton()
{
  var num = document.getElementById('lu1').value;
  if ((num % 2) == 0)
  {
    document.getElementById('t1').innerHTML = "Parillinen"
  }
  else{
    document.getElementById('t1').innerHTML = "Pariton"
  }
}
