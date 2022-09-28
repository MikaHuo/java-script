function numero()
{
  var luku = document.getElementById('l1').value;
  if(luku <= 0)
  {
    document.getElementById('v1').innerHTML = "Luku on negatiivinen";
  }
  else {
    document.getElementById('v1').innerHTML = "luku on positiivinen";
  }
}
