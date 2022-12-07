function tulosta()
{
  var etunimi, sukunimi;
    try {
      etunimi = document.getElementById('enimi').value;
      sukunimi = document.getElementById('snimi').value;
    }
    catch (e) {
      alert("virhe " + e.message);
    }
    finally{
      alert("annoit tietoa: " + etunimi + " " + sukunimi);
    }
}
