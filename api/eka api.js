function lataa()
{
  fetch("https://randomuser.me/api/")
  .then(response => response.json())
  .then(data => {
    console.log(data.results[0]);
    let paiva = data.results[0].dob.date;
    document.getElementById('henkilo').innerHTML = "<b>Nimi:</b> " + data.results[0].name.first
    +  "<br /><b>Sukunimi:</b> " + data.results[0].name.last + "<br /><b>Ikä :</b>" + data.results[0].dob.age + "<br><b>Maa: </b>"
    + data.results[0].location.country + "<br /><b> Osoite: </b>" + data.results[0].location.street.name + data.results[0].location.street.number
    + "<br /><b>Postinmr: </b>" + data.results[0].location.postcode
    + "<br /><b>Sähköposti: </b>" + data.results[0].email
    + "<br /><b>Puh Nro: </b>" + data.results[0].location.postcode
    document.getElementById('tietoa').src = data.results[0].picture.large
  })
}
