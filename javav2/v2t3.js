function vuosi()
{
var vuosi = document.getElementById('ka').value;
  if((0 == year % 4) && (0 != year % 100) || (0 == year % 400))
 {
   document.getElementById('v1').innerHTML = "Karkaus vuosi";
 }
  else
  {
    document.getElementById('v1').innerHTML = "Karkaamaton vuosi";
  }
}
