function esimerkkiTaulukko()
{
  var autot = [];
  var caarat = ["Tesla","BMWi3","Hyndai ionic"];
  autot.push("Jeep");
  document.write(caarat[1] + " " +autot[0] + "<br />");
  document.write(caarat + "<br />");
  document.write(autot)
  var siirrettavat = caarat.pop();
  document.write("siirrettävä = " + siirrettavat);
  document.write("<br />Autot taulukko = " + caarat );
  autot.unshift(siirrettavat);
  document.write("<br />Autot taulukko = " + autot);
//   caarat.push() = autot.pop(); selain ei tykkää tästä
  document.write("<br />Caarat taulukko = " + caarat + "<br /> Autot taulukko = autot");
}
