function v3t3()
{
  var sana = document.getElementById('tulos').value;
  for(var r = 0; r < sana.length; r++)

  if  (sana[r] == "ö" || sana[r] == "Ö")
{
  document.getElementById('par').innerHTML = "Löytyy";
}
  else
{
  document.getElementById('par').innerHTML = "Ei löytynyt";
}
}
