function v3t1()
{
  var num = document.getElementById('tulos').value;
  var tulosta = "";
  for(var i=2; i<=num; i=i+2)
{
  tulosta += + i;
  if (i<num)
  {
    tulosta += ", ";
  }
}
  document.getElementById('par').innerHTML = tulosta;
}
