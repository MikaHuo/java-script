function vastaus() {
  let num1 = parseInt(document.getElementById('pieni').value);
  let num2 = parseInt(document.getElementById('iso').value);
  let parilliset = "";
  let parittomat = "";
  let paryht = 0;
  let rityht = 0;

    for(var i = num1; i <= num2; i+=2)
    {
      parilliset += i + " ";
      paryht += i;
    }
    for(var i = (num1 + 1); i <= num2; i+=2)
    {
      parittomat += i + " ";
      rityht += i;
    }


  document.getElementById('tulosta').innerHTML = parilliset + " on yhteensä " + paryht +"<br>" + parittomat + " on yhteensä " + rityht;
}
